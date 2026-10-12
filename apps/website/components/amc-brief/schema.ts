// Questionnaire for prospective IT AMC clients (/amc-brief).
// Every visible string is bilingual; answers are stored by field id.

export type Lang = 'en' | 'ru';
export type L = { en: string; ru: string };
export type Answers = Record<string, string | string[] | boolean>;

export type Option = { v: string } & L;

export type Field = {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'textarea' | 'choice' | 'multi' | 'consent';
  label: L;
  hint?: L;
  /** Longer explanation, revealed by the "?" button. */
  help?: L;
  placeholder?: L;
  options?: Option[];
  required?: boolean;
  /** Field is shown (and validated) only when this returns true. */
  showIf?: (a: Answers) => boolean;
  half?: boolean;
};

export type Step = { id: string; title: L; intro: L; fields: Field[] };

const t = (en: string, ru: string): L => ({ en, ru });
const o = (v: string, en: string, ru: string): Option => ({ v, en, ru });
const UNKNOWN = o('unknown', "Don't know", 'Не знаю');

const APPROX = t(
  'An approximate number is fine — we confirm everything during the site survey.',
  'Можно примерно — точные цифры уточним на бесплатном аудите.',
);

const is = (id: string, ...values: string[]) => (a: Answers) => values.includes(String(a[id] ?? ''));

export const STEPS: Step[] = [
  {
    id: 'company',
    title: t('Company & contact', 'Компания и контакт'),
    intro: t(
      'Who you are and where your offices are, so we know who to talk to and where engineers will travel.',
      'Кто вы и где находятся офисы — чтобы понимать, с кем общаться и куда будут выезжать инженеры.',
    ),
    fields: [
      { id: 'company', type: 'text', required: true, label: t('Company name', 'Название компании'), hint: t('As on the trade licence.', 'Как в trade license.') },
      {
        id: 'industry', type: 'choice', label: t('Industry', 'Сфера деятельности'),
        options: [
          o('professional', 'Office / professional services', 'Офис / профессиональные услуги'),
          o('retail', 'Retail / F&B', 'Ритейл / общепит'),
          o('healthcare', 'Healthcare / clinic', 'Медицина / клиника'),
          o('logistics', 'Logistics / trading', 'Логистика / трейдинг'),
          o('construction', 'Construction / real estate', 'Строительство / недвижимость'),
          o('finance', 'Finance / insurance', 'Финансы / страхование'),
          o('education', 'Education', 'Образование'),
          o('hospitality', 'Hospitality', 'Гостиничный бизнес'),
          o('manufacturing', 'Manufacturing', 'Производство'),
          o('other', 'Other', 'Другое'),
        ],
      },
      { id: 'contactName', type: 'text', required: true, half: true, label: t('Contact person', 'Контактное лицо') },
      { id: 'contactRole', type: 'text', half: true, label: t('Position', 'Должность'), placeholder: t('e.g. Office Manager, CFO', 'например, офис-менеджер, финдиректор') },
      { id: 'email', type: 'email', required: true, half: true, label: t('Email', 'Email') },
      { id: 'phone', type: 'tel', required: true, half: true, label: t('Phone / WhatsApp', 'Телефон / WhatsApp'), placeholder: t('+971 5X XXX XXXX', '+971 5X XXX XXXX') },
      {
        id: 'preferredContact', type: 'multi', label: t('Best way to reach you', 'Как удобнее связаться'),
        options: [o('email', 'Email', 'Email'), o('phone', 'Phone call', 'Звонок'), o('whatsapp', 'WhatsApp', 'WhatsApp'), o('telegram', 'Telegram', 'Telegram')],
      },
      {
        id: 'emirates', type: 'multi', required: true, label: t('Where are your sites?', 'Где находятся ваши площадки?'),
        hint: t('Select every emirate where an engineer may need to visit.', 'Отметьте все эмираты, куда может понадобиться выезд инженера.'),
        options: [
          o('dubai', 'Dubai', 'Дубай'), o('abudhabi', 'Abu Dhabi', 'Абу-Даби'), o('sharjah', 'Sharjah', 'Шарджа'),
          o('ajman', 'Ajman', 'Аджман'), o('rak', 'Ras Al Khaimah', 'Рас-эль-Хайма'), o('uaq', 'Umm Al Quwain', 'Умм-эль-Кайвайн'),
          o('fujairah', 'Fujairah', 'Фуджейра'), o('abroad', 'Outside the UAE', 'За пределами ОАЭ'),
        ],
      },
      { id: 'sitesCount', type: 'number', half: true, label: t('Number of sites', 'Количество площадок'), hint: t('Offices, warehouses, shops, clinics.', 'Офисы, склады, магазины, клиники.') },
      {
        id: 'siteAddresses', type: 'textarea', label: t('Site locations', 'Адреса площадок'),
        placeholder: t('e.g. Business Bay, Bay Square 5 — HQ, 40 staff; JAFZA — warehouse, 6 staff', 'например: Business Bay, Bay Square 5 — главный офис, 40 чел.; JAFZA — склад, 6 чел.'),
        hint: t('Area and building is enough. Mention how many people work at each site.', 'Достаточно района и здания. Укажите, сколько людей работает на каждой площадке.'),
      },
    ],
  },
  {
    id: 'users',
    title: t('Users & workstations', 'Пользователи и рабочие места'),
    intro: t(
      'The size of your team and fleet is the main factor in AMC pricing.',
      'Размер команды и парка техники — главный фактор стоимости AMC.',
    ),
    fields: [
      { id: 'employees', type: 'number', required: true, half: true, label: t('Total employees', 'Всего сотрудников') },
      {
        id: 'itUsers', type: 'number', half: true, label: t('IT users', 'IT-пользователей'),
        hint: t('People with a computer or a company email.', 'Сотрудники с компьютером или корпоративной почтой.'),
      },
      { id: 'desktops', type: 'number', half: true, label: t('Desktop PCs', 'Стационарных ПК'), hint: APPROX },
      { id: 'laptops', type: 'number', half: true, label: t('Laptops (Windows)', 'Ноутбуков (Windows)'), hint: APPROX },
      { id: 'macs', type: 'number', half: true, label: t('Apple Macs', 'Компьютеров Apple Mac') },
      { id: 'mobiles', type: 'number', half: true, label: t('Company phones / tablets', 'Корпоративных телефонов / планшетов'), hint: t('Only if they need to be managed by IT.', 'Только если ими должен управлять IT.') },
      {
        id: 'os', type: 'multi', label: t('Operating systems in use', 'Какие операционные системы используются'),
        options: [o('win11', 'Windows 11', 'Windows 11'), o('win10', 'Windows 10', 'Windows 10'), o('winold', 'Older Windows (7/8)', 'Старые Windows (7/8)'), o('macos', 'macOS', 'macOS'), o('linux', 'Linux', 'Linux'), UNKNOWN],
        help: t(
          'Windows 10 is out of support since October 2025: such PCs get no security updates. We will include an upgrade plan in the proposal.',
          'Windows 10 не поддерживается с октября 2025 года — на таких ПК нет обновлений безопасности. Мы включим план обновления в предложение.',
        ),
      },
      {
        id: 'ownership', type: 'choice', label: t('Who owns the devices?', 'Чьи устройства?'),
        options: [o('company', 'Company-owned', 'Компании'), o('byod', 'Employees’ own (BYOD)', 'Личные сотрудников (BYOD)'), o('mixed', 'Mixed', 'Смешанно')],
      },
      {
        id: 'remote', type: 'choice', label: t('Remote / hybrid work', 'Удалённая / гибридная работа'),
        options: [o('none', 'Everyone in the office', 'Все в офисе'), o('some', 'Some staff remote', 'Часть удалённо'), o('most', 'Mostly remote', 'В основном удалённо')],
      },
      {
        id: 'growth', type: 'choice', label: t('Headcount plans for the next 12 months', 'Планы по штату на 12 месяцев'),
        options: [o('flat', 'No change', 'Без изменений'), o('grow', 'Growth up to 25%', 'Рост до 25%'), o('growfast', 'Growth over 25%', 'Рост более 25%'), o('shrink', 'Reduction', 'Сокращение'), UNKNOWN],
      },
    ],
  },
  {
    id: 'servers',
    title: t('Servers & storage', 'Серверы и хранение данных'),
    intro: t(
      'Servers carry the most risk and need the most care. If you are not sure, "Don’t know" is a perfectly good answer.',
      'Серверы — самая критичная часть, требующая больше всего внимания. Если не уверены — «Не знаю» вполне нормальный ответ.',
    ),
    fields: [
      {
        id: 'hasServers', type: 'choice', required: true, label: t('Do you have servers in the office?', 'Есть ли у вас серверы в офисе?'),
        options: [o('onprem', 'Yes, physical servers in the office', 'Да, физические серверы в офисе'), o('cloud', 'Cloud only (Azure, AWS, hosting)', 'Только облако (Azure, AWS, хостинг)'), o('hybrid', 'Both', 'И то, и другое'), o('none', 'No servers', 'Серверов нет'), UNKNOWN],
        help: t(
          'A server is a computer that runs 24/7 for shared tasks: user logins (domain), shared folders, accounting database, CCTV recording.',
          'Сервер — компьютер, работающий 24/7 для общих задач: вход пользователей (домен), общие папки, база бухгалтерии, запись видеонаблюдения.',
        ),
      },
      { id: 'physicalServers', type: 'number', half: true, label: t('Physical servers', 'Физических серверов'), showIf: is('hasServers', 'onprem', 'hybrid') },
      { id: 'virtualServers', type: 'number', half: true, label: t('Virtual machines', 'Виртуальных машин'), showIf: is('hasServers', 'onprem', 'hybrid', 'cloud'), hint: t('Leave blank if unsure.', 'Если не знаете — оставьте пустым.') },
      {
        id: 'hypervisor', type: 'multi', label: t('Virtualisation platform', 'Платформа виртуализации'), showIf: is('hasServers', 'onprem', 'hybrid'),
        options: [o('vmware', 'VMware', 'VMware'), o('hyperv', 'Hyper-V', 'Hyper-V'), o('proxmox', 'Proxmox', 'Proxmox'), o('none', 'None', 'Нет'), UNKNOWN],
      },
      {
        id: 'serverRoles', type: 'multi', label: t('What do the servers do?', 'Для чего используются серверы?'), showIf: is('hasServers', 'onprem', 'hybrid', 'cloud'),
        options: [
          o('ad', 'Domain / user logins (Active Directory)', 'Домен / вход пользователей (Active Directory)'),
          o('files', 'Shared folders', 'Общие папки'),
          o('erp', 'Accounting / ERP database', 'База бухгалтерии / ERP'),
          o('exchange', 'Email (Exchange)', 'Почта (Exchange)'),
          o('rdp', 'Remote desktop / terminal server', 'Удалённый рабочий стол / терминальный сервер'),
          o('cctv', 'CCTV recording', 'Запись видеонаблюдения'),
          o('web', 'Website / internal apps', 'Сайт / внутренние приложения'),
          UNKNOWN,
        ],
      },
      { id: 'serverAge', type: 'choice', label: t('Age of the oldest server', 'Возраст самого старого сервера'), showIf: is('hasServers', 'onprem', 'hybrid'),
        options: [o('lt3', 'Under 3 years', 'До 3 лет'), o('3to5', '3–5 years', '3–5 лет'), o('gt5', 'Over 5 years', 'Более 5 лет'), UNKNOWN],
        help: t('Servers older than 5 years are usually out of manufacturer warranty; spare parts become hard to source.', 'Серверы старше 5 лет обычно без гарантии производителя, запчасти найти сложно.'),
      },
      { id: 'nas', type: 'choice', half: true, label: t('Network storage (NAS: Synology, QNAP…)', 'Сетевое хранилище (NAS: Synology, QNAP…)'), options: [o('yes', 'Yes', 'Да'), o('no', 'No', 'Нет'), UNKNOWN] },
      {
        id: 'serverRoom', type: 'choice', label: t('Where is the equipment installed?', 'Где установлено оборудование?'),
        options: [o('room', 'Dedicated server room with AC', 'Отдельная серверная с кондиционером'), o('rack', 'Rack in the office', 'Стойка в офисе'), o('norack', 'No rack — on shelves / floor', 'Без стойки — на полке / на полу'), UNKNOWN],
      },
      { id: 'ups', type: 'choice', half: true, label: t('UPS (backup power)', 'ИБП (резервное питание)'), options: [o('yes', 'Yes', 'Да'), o('no', 'No', 'Нет'), UNKNOWN] },
    ],
  },
  {
    id: 'network',
    title: t('Network & internet', 'Сеть и интернет'),
    intro: t(
      'Most daily complaints ("internet is slow", "Wi-Fi drops") come from here.',
      'Отсюда приходит большинство ежедневных жалоб («тормозит интернет», «пропадает Wi-Fi»).',
    ),
    fields: [
      { id: 'isp', type: 'multi', label: t('Internet provider', 'Интернет-провайдер'), options: [o('etisalat', 'e& (Etisalat)', 'e& (Etisalat)'), o('du', 'du', 'du'), o('other', 'Other / building provider', 'Другой / провайдер здания'), UNKNOWN] },
      {
        id: 'backupLine', type: 'choice', label: t('Backup internet line', 'Резервный канал интернета'),
        options: [o('yes', 'Yes, with automatic failover', 'Да, с автопереключением'), o('manual', 'Yes, switched manually', 'Да, переключаем вручную'), o('no', 'No', 'Нет'), UNKNOWN],
      },
      {
        id: 'firewall', type: 'choice', label: t('Firewall', 'Межсетевой экран (firewall)'),
        options: [o('fortinet', 'FortiGate', 'FortiGate'), o('sophos', 'Sophos', 'Sophos'), o('sonicwall', 'SonicWall', 'SonicWall'), o('cisco', 'Cisco / Meraki', 'Cisco / Meraki'), o('mikrotik', 'MikroTik', 'MikroTik'), o('isp', 'Only the provider’s router', 'Только роутер провайдера'), o('other', 'Other', 'Другой'), UNKNOWN],
        help: t('The box the internet cable plugs into. The brand name is usually printed on the front panel.', 'Устройство, в которое приходит кабель интернета. Название бренда обычно написано на передней панели.'),
      },
      { id: 'firewallLicence', type: 'choice', label: t('Is the firewall subscription active?', 'Активна ли подписка (лицензия) firewall?'), showIf: is('firewall', 'fortinet', 'sophos', 'sonicwall', 'cisco'), options: [o('yes', 'Yes', 'Да'), o('expired', 'Expired', 'Истекла'), UNKNOWN] },
      { id: 'switches', type: 'number', half: true, label: t('Network switches', 'Сетевых коммутаторов (свитчей)'), hint: APPROX },
      { id: 'accessPoints', type: 'number', half: true, label: t('Wi-Fi access points', 'Точек доступа Wi-Fi'), hint: APPROX },
      { id: 'wifiBrand', type: 'text', half: true, label: t('Wi-Fi brand', 'Бренд Wi-Fi'), placeholder: t('Ubiquiti, Aruba, Ruckus, TP-Link…', 'Ubiquiti, Aruba, Ruckus, TP-Link…') },
      { id: 'guestWifi', type: 'choice', half: true, label: t('Separate guest Wi-Fi', 'Отдельный гостевой Wi-Fi'), options: [o('yes', 'Yes', 'Да'), o('no', 'No', 'Нет'), UNKNOWN] },
      { id: 'vpn', type: 'choice', label: t('VPN for remote access', 'VPN для удалённого доступа'), options: [o('yes', 'Yes', 'Да'), o('no', 'No', 'Нет'), o('notneeded', 'Not needed', 'Не нужен'), UNKNOWN] },
      {
        id: 'cabling', type: 'choice', label: t('State of the cabling', 'Состояние кабельной сети'),
        options: [o('good', 'Neat and labelled', 'Аккуратно, всё подписано'), o('partial', 'Partly organised', 'Частично в порядке'), o('messy', 'Messy, nobody knows what goes where', 'Хаос, никто не знает, что куда идёт'), UNKNOWN],
      },
    ],
  },
  {
    id: 'apps',
    title: t('Cloud, apps & devices', 'Облако, программы и устройства'),
    intro: t(
      'Email, business software and everything else that plugs into the network.',
      'Почта, бизнес-программы и всё остальное, что подключено к сети.',
    ),
    fields: [
      {
        id: 'email365', type: 'choice', required: true, label: t('Company email', 'Корпоративная почта'),
        options: [o('m365', 'Microsoft 365', 'Microsoft 365'), o('google', 'Google Workspace', 'Google Workspace'), o('exchange', 'Own Exchange server', 'Свой сервер Exchange'), o('hosting', 'Hosting provider mail (cPanel etc.)', 'Почта хостинга (cPanel и т.п.)'), o('free', 'Gmail / Outlook.com personal accounts', 'Личные Gmail / Outlook.com'), UNKNOWN],
      },
      { id: 'mailboxes', type: 'number', half: true, label: t('Number of mailboxes / licences', 'Количество ящиков / лицензий'), showIf: is('email365', 'm365', 'google', 'exchange', 'hosting') },
      {
        id: 'adminAccess', type: 'choice', label: t('Who has admin access to email and the domain?', 'У кого админ-доступ к почте и домену?'),
        options: [o('us', 'We do', 'У нас'), o('vendor', 'Current / previous IT vendor', 'У текущего / прошлого подрядчика'), o('person', 'A former employee', 'У бывшего сотрудника'), UNKNOWN],
        help: t('This matters for a smooth handover: without admin access, recovering it can take days.', 'Это важно для передачи дел: без админ-доступа его восстановление может занять дни.'),
      },
      { id: 'storage', type: 'multi', label: t('Where are shared files stored?', 'Где хранятся общие файлы?'), options: [o('sharepoint', 'SharePoint / OneDrive', 'SharePoint / OneDrive'), o('gdrive', 'Google Drive', 'Google Drive'), o('server', 'File server / NAS', 'Файловый сервер / NAS'), o('dropbox', 'Dropbox', 'Dropbox'), o('local', 'On individual PCs', 'На компьютерах сотрудников'), UNKNOWN] },
      {
        id: 'businessApps', type: 'textarea', label: t('Key business software', 'Ключевые бизнес-программы'),
        placeholder: t('e.g. Tally, Zoho Books, Odoo, SAP B1, QuickBooks, CRM, design or medical software', 'например: Tally, Zoho Books, Odoo, SAP B1, QuickBooks, CRM, дизайнерский или медицинский софт'),
        hint: t('Anything the business stops without.', 'Всё, без чего останавливается работа.'),
      },
      {
        id: 'devices', type: 'multi', label: t('Other equipment we should support', 'Другое оборудование, которое нужно обслуживать'),
        options: [
          o('printers', 'Printers / MFPs', 'Принтеры / МФУ'), o('cctv', 'CCTV cameras', 'Видеонаблюдение'), o('access', 'Access control / biometric attendance', 'СКУД / биометрический учёт времени'),
          o('pbx', 'IP telephony / PBX', 'IP-телефония / АТС'), o('pos', 'POS terminals', 'POS-терминалы'), o('av', 'Meeting room AV (screens, Teams Rooms)', 'Переговорные (экраны, Teams Rooms)'),
        ],
      },
      { id: 'printers', type: 'number', half: true, label: t('Printers / MFPs', 'Принтеров / МФУ'), showIf: (a) => Array.isArray(a.devices) && a.devices.includes('printers') },
      { id: 'cameras', type: 'number', half: true, label: t('CCTV cameras', 'Камер видеонаблюдения'), showIf: (a) => Array.isArray(a.devices) && a.devices.includes('cctv') },
    ],
  },
  {
    id: 'security',
    title: t('Security & backup', 'Безопасность и резервное копирование'),
    intro: t(
      'Honest answers help us spot risks before they become incidents. Nothing here is judged.',
      'Честные ответы помогают увидеть риски до того, как они станут инцидентами. Здесь нет «неправильных» ответов.',
    ),
    fields: [
      {
        id: 'antivirus', type: 'choice', label: t('Antivirus / endpoint protection', 'Антивирус / защита рабочих мест'),
        options: [o('defender', 'Built-in Microsoft Defender only', 'Только встроенный Microsoft Defender'), o('paid', 'Paid business product', 'Платный бизнес-продукт'), o('mixed', 'Different on different PCs', 'На разных ПК по-разному'), o('none', 'None', 'Нет'), UNKNOWN],
      },
      { id: 'antivirusName', type: 'text', label: t('Which product?', 'Какой именно?'), showIf: is('antivirus', 'paid'), placeholder: t('ESET, Kaspersky, Sophos, CrowdStrike, SentinelOne…', 'ESET, Kaspersky, Sophos, CrowdStrike, SentinelOne…') },
      {
        id: 'backup', type: 'choice', required: true, label: t('How is data backed up?', 'Как делаются резервные копии?'),
        options: [o('offsite', 'Automatically, with a copy off-site / in the cloud', 'Автоматически, с копией вне офиса / в облаке'), o('local', 'Automatically, only in the office', 'Автоматически, только в офисе'), o('manual', 'Manually, from time to time', 'Вручную, время от времени'), o('none', 'No backups', 'Не делаются'), UNKNOWN],
        help: t(
          'A copy stored only in the same office does not protect against ransomware, fire or theft. Best practice is 3-2-1: 3 copies, 2 media, 1 off-site.',
          'Копия только в том же офисе не защищает от вируса-шифровальщика, пожара или кражи. Правило 3-2-1: 3 копии, 2 носителя, 1 вне офиса.',
        ),
      },
      {
        id: 'm365Backup', type: 'choice', label: t('Are emails and OneDrive/Google Drive backed up separately?', 'Есть ли отдельный бэкап почты и OneDrive/Google Drive?'), showIf: is('email365', 'm365', 'google'),
        options: [o('yes', 'Yes', 'Да'), o('no', 'No', 'Нет'), UNKNOWN],
        help: t('Microsoft and Google keep deleted data for a limited time only. A separate backup protects against accidental or malicious deletion.', 'Microsoft и Google хранят удалённые данные ограниченное время. Отдельный бэкап защищает от случайного или злонамеренного удаления.'),
      },
      {
        id: 'restoreTest', type: 'choice', label: t('When was a restore from backup last tested?', 'Когда последний раз проверяли восстановление из бэкапа?'), showIf: (a) => !['none', 'unknown', ''].includes(String(a.backup ?? '')),
        options: [o('3m', 'Within 3 months', 'В последние 3 месяца'), o('1y', 'Within a year', 'В течение года'), o('never', 'Never', 'Никогда'), UNKNOWN],
      },
      {
        id: 'mfa', type: 'choice', label: t('Two-factor authentication (MFA) on email', 'Двухфакторная аутентификация (MFA) на почте'),
        options: [o('all', 'For everyone', 'У всех'), o('some', 'For some users', 'У части пользователей'), o('none', 'No', 'Нет'), UNKNOWN],
        help: t('The code from an app or SMS on login. It blocks most email account takeovers.', 'Код из приложения или SMS при входе. Блокирует большинство взломов почты.'),
      },
      {
        id: 'compliance', type: 'multi', label: t('Compliance requirements', 'Требования регуляторов / стандарты'),
        options: [o('none', 'None', 'Нет'), o('iso27001', 'ISO 27001', 'ISO 27001'), o('uaeia', 'UAE IA / NESA', 'UAE IA / NESA'), o('health', 'DHA / DoH (healthcare)', 'DHA / DoH (медицина)'), o('pci', 'PCI DSS (card payments)', 'PCI DSS (платёжные карты)'), o('pdpl', 'UAE PDPL / DIFC / ADGM data protection', 'Защита данных UAE PDPL / DIFC / ADGM'), UNKNOWN],
      },
      { id: 'incidents', type: 'textarea', label: t('Any security incidents or data loss in the past 2 years?', 'Были ли инциденты безопасности или потеря данных за последние 2 года?'), hint: t('Optional. E.g. hacked mailbox, ransomware, failed disk.', 'Необязательно. Например: взлом почты, шифровальщик, сломанный диск.') },
    ],
  },
  {
    id: 'current',
    title: t('Current IT support', 'Текущая IT-поддержка'),
    intro: t(
      'What works today and what does not — this shapes our proposal more than anything else.',
      'Что работает сейчас и что нет — это больше всего влияет на наше предложение.',
    ),
    fields: [
      {
        id: 'currentSupport', type: 'choice', required: true, label: t('Who supports your IT today?', 'Кто сейчас обслуживает IT?'),
        options: [o('inhouse', 'In-house IT staff', 'Штатный IT-специалист'), o('vendor', 'Another company under AMC', 'Другая компания по AMC'), o('freelancer', 'A freelancer on call', 'Фрилансер по вызову'), o('nobody', 'Nobody / we manage ourselves', 'Никто / справляемся сами')],
      },
      { id: 'inhouseCount', type: 'number', half: true, label: t('How many IT staff?', 'Сколько IT-сотрудников?'), showIf: is('currentSupport', 'inhouse') },
      {
        id: 'inhouseRole', type: 'choice', label: t('What should we do alongside your IT team?', 'Какая роль нужна рядом с вашим IT?'), showIf: is('currentSupport', 'inhouse'),
        options: [o('replace', 'Take over IT fully', 'Полностью взять IT на себя'), o('cosource', 'Help them: escalations, projects, holidays', 'Помогать: сложные задачи, проекты, отпуска'), UNKNOWN],
      },
      { id: 'contractEnd', type: 'date', half: true, label: t('Current contract ends', 'Текущий договор заканчивается'), showIf: is('currentSupport', 'vendor'), hint: t('Including the notice period, if known.', 'С учётом срока уведомления, если знаете.') },
      {
        id: 'satisfaction', type: 'choice', label: t('How satisfied are you with current support?', 'Насколько довольны текущей поддержкой?'), showIf: (a) => a.currentSupport !== undefined && a.currentSupport !== 'nobody',
        options: [o('5', 'Very satisfied', 'Полностью'), o('4', 'Mostly', 'В основном'), o('3', 'So-so', 'Так себе'), o('2', 'Not satisfied', 'Не довольны'), o('1', 'Very unhappy', 'Совсем не довольны')],
      },
      {
        id: 'pains', type: 'multi', label: t('What bothers you most?', 'Что беспокоит больше всего?'),
        hint: t('Select everything that applies.', 'Отметьте всё, что относится к вам.'),
        options: [
          o('slowResponse', 'Slow response to requests', 'Долго реагируют на заявки'), o('repeat', 'The same problems keep coming back', 'Одни и те же проблемы повторяются'),
          o('slowPcs', 'Slow or old computers', 'Медленные или старые компьютеры'), o('internet', 'Internet / Wi-Fi drops', 'Пропадает интернет / Wi-Fi'),
          o('nodocs', 'No documentation or passwords in one place', 'Нет документации и паролей в одном месте'), o('backup', 'Not sure backups work', 'Нет уверенности в бэкапах'),
          o('security', 'Worried about security', 'Беспокоит безопасность'), o('cost', 'Unpredictable IT costs', 'Непредсказуемые расходы на IT'),
          o('onboarding', 'Slow setup for new staff', 'Долго подключаем новых сотрудников'), o('email', 'Email problems / spam', 'Проблемы с почтой / спам'),
          o('printers', 'Printers', 'Принтеры'), o('dependency', 'Everything depends on one person', 'Всё держится на одном человеке'),
        ],
      },
      {
        id: 'tickets', type: 'choice', label: t('Roughly how many IT requests per month?', 'Примерно сколько IT-обращений в месяц?'),
        options: [o('lt10', 'Fewer than 10', 'Меньше 10'), o('10to30', '10–30', '10–30'), o('30to100', '30–100', '30–100'), o('gt100', 'Over 100', 'Больше 100'), UNKNOWN],
      },
      {
        id: 'docs', type: 'choice', label: t('Is there IT documentation (network diagram, passwords, licences)?', 'Есть ли IT-документация (схема сети, пароли, лицензии)?'),
        options: [o('full', 'Yes, up to date', 'Да, актуальная'), o('partial', 'Partly', 'Частично'), o('none', 'No', 'Нет'), UNKNOWN],
      },
    ],
  },
  {
    id: 'amc',
    title: t('What you expect from the AMC', 'Что вы ждёте от AMC'),
    intro: t(
      'Service levels and scope. Not sure what to pick? Choose "Need advice" and we will recommend an option.',
      'Уровень сервиса и объём работ. Не уверены, что выбрать? Отметьте «Нужна консультация» — мы порекомендуем.',
    ),
    fields: [
      {
        id: 'amcType', type: 'choice', required: true, label: t('Type of contract', 'Тип договора'),
        options: [o('labour', 'Labour-only (non-comprehensive)', 'Только работы (non-comprehensive)'), o('comprehensive', 'Comprehensive (parts included)', 'Комплексный (с запчастями)'), o('advice', 'Need advice', 'Нужна консультация')],
        help: t(
          'Labour-only: engineers’ work is covered, replacement parts are paid separately. Comprehensive: failed parts are also replaced within the contract — it costs more, and usually excludes consumables (toner, batteries) and physical damage.',
          'Только работы: оплачивается труд инженеров, запчасти — отдельно. Комплексный: замена вышедших из строя комплектующих тоже входит в договор — он дороже и обычно не покрывает расходники (тонер, батареи) и физические повреждения.',
        ),
      },
      {
        id: 'coverage', type: 'choice', required: true, label: t('Support hours', 'Часы поддержки'),
        options: [o('8x5', 'Business hours, Mon–Fri', 'Рабочее время, пн–пт'), o('8x6', 'Business hours, Mon–Sat', 'Рабочее время, пн–сб'), o('12x6', 'Extended hours (e.g. 8:00–20:00), 6 days', 'Расширенные часы (например, 8:00–20:00), 6 дней'), o('24x7', '24/7 for critical issues', '24/7 для критичных проблем'), o('advice', 'Need advice', 'Нужна консультация')],
      },
      {
        id: 'response', type: 'choice', label: t('Response time for critical issues', 'Время реакции на критичные проблемы'),
        options: [o('1h', 'Within 1 hour', 'До 1 часа'), o('2h', 'Within 2 hours', 'До 2 часов'), o('4h', 'Within 4 hours', 'До 4 часов'), o('nbd', 'Next business day', 'На следующий рабочий день'), o('advice', 'Need advice', 'Нужна консультация')],
        help: t('Critical = the business cannot work: no internet, server down, email down for everyone. Faster response costs more.', 'Критичная = бизнес не может работать: нет интернета, упал сервер, не работает почта у всех. Чем быстрее реакция, тем дороже.'),
      },
      {
        id: 'onsite', type: 'choice', required: true, label: t('Engineer visits', 'Выезды инженера'),
        options: [o('ondemand', 'Only when needed', 'Только по необходимости'), o('monthly', 'Scheduled monthly visit', 'Плановый выезд раз в месяц'), o('biweekly', 'Every two weeks', 'Раз в две недели'), o('weekly', 'Weekly', 'Еженедельно'), o('resident', 'Resident engineer on-site', 'Инженер постоянно на месте')],
        help: t('Most issues are solved remotely within minutes; scheduled visits handle hardware, preventive maintenance and user questions.', 'Большинство проблем решается удалённо за минуты; плановые выезды — для железа, профилактики и вопросов сотрудников.'),
      },
      { id: 'residentDays', type: 'number', half: true, label: t('Resident engineer: days per week', 'Инженер на месте: дней в неделю'), showIf: is('onsite', 'resident') },
      {
        id: 'scope', type: 'multi', label: t('What should the contract include?', 'Что должно входить в договор?'),
        hint: t('Select everything you need — we will price each item transparently.', 'Отметьте всё нужное — мы прозрачно оценим каждый пункт.'),
        options: [
          o('helpdesk', 'Remote helpdesk for users', 'Удалённый хелпдеск для сотрудников'), o('onsite', 'On-site support', 'Выездная поддержка'),
          o('pm', 'Preventive maintenance', 'Профилактическое обслуживание'), o('monitoring', '24/7 monitoring of servers & network', 'Мониторинг серверов и сети 24/7'),
          o('patching', 'Windows & software updates', 'Обновления Windows и программ'), o('backup', 'Backup management & restore tests', 'Управление бэкапами и тесты восстановления'),
          o('m365', 'Microsoft 365 / Google admin', 'Администрирование Microsoft 365 / Google'), o('network', 'Network & firewall management', 'Управление сетью и firewall'),
          o('security', 'Endpoint security (EDR)', 'Защита рабочих мест (EDR)'), o('onboarding', 'New staff setup / leavers', 'Подключение и отключение сотрудников'),
          o('procurement', 'Hardware & licence procurement', 'Закупка оборудования и лицензий'), o('vendors', 'Dealing with ISP, printer and software vendors', 'Работа с провайдером, поставщиками принтеров и ПО'),
          o('docs', 'IT documentation & asset register', 'IT-документация и учёт активов'), o('reports', 'Monthly reports', 'Ежемесячные отчёты'),
          o('vcio', 'IT planning & budgeting (vCIO)', 'IT-планирование и бюджет (vCIO)'),
        ],
      },
      {
        id: 'pmFrequency', type: 'choice', label: t('Preventive maintenance frequency', 'Частота профилактики'), showIf: (a) => Array.isArray(a.scope) && a.scope.includes('pm'),
        options: [o('monthly', 'Monthly', 'Ежемесячно'), o('quarterly', 'Quarterly', 'Ежеквартально'), o('semiannual', 'Twice a year', 'Дважды в год'), o('advice', 'Need advice', 'Нужна консультация')],
        help: t('Cleaning, health checks of disks and batteries, firmware updates, review of logs and backups.', 'Чистка, проверка дисков и батарей ИБП, обновление прошивок, проверка журналов и бэкапов.'),
      },
      { id: 'languages', type: 'multi', label: t('Support languages', 'Языки поддержки'), options: [o('en', 'English', 'Английский'), o('ru', 'Russian', 'Русский'), o('ar', 'Arabic', 'Арабский'), o('hi', 'Hindi / Urdu', 'Хинди / урду')] },
      { id: 'term', type: 'choice', label: t('Contract term', 'Срок договора'), options: [o('1y', '1 year', '1 год'), o('2y', '2 years', '2 года'), o('3y', '3 years', '3 года'), o('trial', 'Start with a 3-month trial', 'Начать с пробных 3 месяцев')] },
      {
        id: 'budget', type: 'choice', label: t('Monthly budget (AED, excl. VAT)', 'Бюджет в месяц (AED, без VAT)'),
        hint: t('Helps us offer the right level instead of the most expensive one.', 'Поможет предложить подходящий уровень, а не самый дорогой.'),
        options: [o('lt2k', 'Up to 2,000', 'До 2 000'), o('2to5k', '2,000–5,000', '2 000–5 000'), o('5to10k', '5,000–10,000', '5 000–10 000'), o('10to20k', '10,000–20,000', '10 000–20 000'), o('gt20k', 'Over 20,000', 'Более 20 000'), o('open', 'Waiting for your proposal', 'Ждём ваше предложение')],
      },
      { id: 'startDate', type: 'date', half: true, label: t('Desired start date', 'Желаемая дата начала') },
    ],
  },
  {
    id: 'final',
    title: t('Final details', 'Последние детали'),
    intro: t('Almost done. A few words about the decision process help us plan the next steps.', 'Почти всё. Пара слов о принятии решения поможет спланировать следующие шаги.'),
    fields: [
      { id: 'decisionMaker', type: 'text', label: t('Who makes the final decision?', 'Кто принимает окончательное решение?'), placeholder: t('e.g. Managing Director', 'например, управляющий директор') },
      {
        id: 'otherQuotes', type: 'choice', label: t('Are you comparing other providers?', 'Сравниваете ли других поставщиков?'),
        options: [o('no', 'No', 'Нет'), o('yes', 'Yes', 'Да'), o('soon', 'Plan to', 'Планируем')],
      },
      {
        id: 'survey', type: 'choice', label: t('Free site survey before the proposal?', 'Бесплатный аудит на месте перед предложением?'),
        options: [o('yes', 'Yes, please', 'Да, хотим'), o('remote', 'A video call is enough', 'Достаточно видеозвонка'), o('no', 'Not needed — send the proposal', 'Не нужно — пришлите предложение')],
        help: t('An engineer spends 1–2 hours on site to inventory equipment and spot risks. You get a short report either way.', 'Инженер 1–2 часа проводит на месте: инвентаризация оборудования и поиск рисков. Короткий отчёт вы получите в любом случае.'),
      },
      { id: 'comments', type: 'textarea', label: t('Anything else we should know?', 'Что ещё нам стоит знать?'), placeholder: t('Upcoming office move, planned projects, special requirements…', 'Переезд офиса, планируемые проекты, особые требования…') },
      {
        id: 'consent', type: 'consent', required: true,
        label: t('I agree that NOCKO may use this information to prepare a proposal and contact me.', 'Я согласен(на), что NOCKO использует эти данные для подготовки предложения и свяжется со мной.'),
        hint: t('We do not share your data with third parties.', 'Мы не передаём ваши данные третьим лицам.'),
      },
    ],
  },
];

export const UI = {
  title: t('IT AMC questionnaire', 'Анкета на IT-обслуживание (AMC)'),
  lead: t(
    'Takes about 10 minutes. Answer what you know — "Don’t know" is fine, and we will clarify the rest together. Your progress is saved in this browser automatically.',
    'Займёт около 10 минут. Отвечайте на то, что знаете — «Не знаю» тоже ответ, остальное уточним вместе. Прогресс сохраняется в этом браузере автоматически.',
  ),
  step: t('Step', 'Шаг'),
  of: t('of', 'из'),
  back: t('Back', 'Назад'),
  next: t('Next', 'Далее'),
  review: t('Review answers', 'Проверить ответы'),
  submit: t('Send questionnaire', 'Отправить анкету'),
  sending: t('Sending…', 'Отправляем…'),
  required: t('Required', 'Обязательно'),
  fixErrors: t('Please fill in the highlighted fields.', 'Заполните выделенные поля.'),
  invalidEmail: t('Check the email address.', 'Проверьте email.'),
  optional: t('optional', 'необязательно'),
  reviewTitle: t('Check your answers', 'Проверьте ответы'),
  reviewLead: t('Click "Edit" to change any section, then send.', 'Нажмите «Изменить», чтобы поправить раздел, затем отправьте.'),
  edit: t('Edit', 'Изменить'),
  empty: t('—', '—'),
  doneTitle: t('Thank you! Questionnaire received.', 'Спасибо! Анкета получена.'),
  doneText: t(
    'An engineer will review your answers and contact you within one business day to agree on the next step.',
    'Инженер изучит ваши ответы и свяжется с вами в течение одного рабочего дня, чтобы согласовать следующий шаг.',
  ),
  error: t('Could not send. Please try again or email us at info@nocko.com.', 'Не удалось отправить. Попробуйте ещё раз или напишите на info@nocko.com.'),
  reset: t('Start over', 'Начать заново'),
  yes: t('Yes', 'Да'),
  saved: t('Saved', 'Сохранено'),
  help: t('Explain', 'Пояснение'),
  contacts: t('Questions? WhatsApp +971 54 244 8888', 'Вопросы? WhatsApp +971 54 244 8888'),
  eyebrow: t('NOCKO · IT Annual Maintenance Contract', 'NOCKO · Годовое IT-обслуживание'),
  chipTime: t('~10 minutes', '~10 минут'),
  chipSave: t('Autosaved', 'Автосохранение'),
  chipSurvey: t('Free site survey', 'Бесплатный аудит'),
  sections: t('Sections', 'Разделы'),
  reviewStep: t('Review & send', 'Проверка и отправка'),
  complete: t('complete', 'готово'),
};

export function visibleFields(step: Step, a: Answers): Field[] {
  return step.fields.filter((f) => !f.showIf || f.showIf(a));
}

export function isEmpty(v: Answers[string] | undefined): boolean {
  if (v === undefined || v === false) return true;
  if (Array.isArray(v)) return v.length === 0;
  return String(v).trim() === '';
}

export function formatValue(f: Field, v: Answers[string] | undefined, lang: Lang): string {
  if (isEmpty(v)) return '';
  if (f.type === 'consent') return UI.yes[lang];
  if (f.options) {
    const vals = Array.isArray(v) ? v : [String(v)];
    return vals.map((x) => f.options!.find((op) => op.v === x)?.[lang] ?? x).join(', ');
  }
  return String(v);
}
