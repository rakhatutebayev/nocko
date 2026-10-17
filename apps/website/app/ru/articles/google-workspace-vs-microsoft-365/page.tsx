import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleByline from '@/components/articles/ArticleByline';
import ArticleContent from '@/components/articles/ArticleContent';
import FAQAccordion from '@/components/sections/FAQAccordion';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const PUBLISHED = '2026-07-04';
const MODIFIED = '2026-10-17';

export const metadata: Metadata = {
  title: 'Google Workspace или Microsoft 365 для малого бизнеса в ОАЭ',
  description: 'Google Workspace против Microsoft 365 для малого бизнеса в ОАЭ: цены 2026 в USD и AED, хранилище, безопасность, Copilot и Gemini, хранение данных в ОАЭ и короткий вердикт.',
  alternates: {
    canonical: '/ru/articles/google-workspace-vs-microsoft-365',
    languages: {
      'en-AE': '/articles/google-workspace-vs-microsoft-365',
      'ru-RU': '/ru/articles/google-workspace-vs-microsoft-365',
      'x-default': '/articles/google-workspace-vs-microsoft-365',
    },
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
  },
  robots: { index: true, follow: true },
};

const articleData = {
  hero: {
    title: 'Google Workspace или Microsoft 365 для малого бизнеса в ОАЭ (сравнение 2026)',
    subtitle: 'Цены, хранилище, безопасность, ИИ-ассистенты и когда переходить',
    description: 'Практическое сравнение для компаний на 5–100 человек в Дубае и Абу-Даби: сколько стоит каждый пакет за пользователя, что входит в тарифы, как они решают вопросы безопасности и хранения данных в ОАЭ, и понятный вердикт по типу компании.',
  },
  intro: 'Почти каждый малый бизнес в ОАЭ рано или поздно задаёт один вопрос: Google Workspace или Microsoft 365? Оба пакета зрелые, безопасные и облачные, ими пользуются компании любого размера в Дубае и Абу-Даби, и оба теперь включают ИИ-ассистента. Универсально лучшего варианта нет; правильный выбор зависит от того, как работает команда, какие файлы и инструменты у вас уже есть и что нужно от безопасности и комплаенса. В этом сравнении сначала вердикт, затем цифры, на которых он основан.',
  blocks: [
    {
      title: 'Короткий вердикт',
      text: `<div class="article__tldr"><p><strong>Выбирайте Microsoft 365</strong>, если команда живёт в Excel и Outlook, нужны настольные приложения Office или вы планируете вырасти за 50 пользователей с тонкими политиками безопасности. <strong>Выбирайте Google Workspace</strong>, если работаете в браузере, весь день совместно редактируете документы, у вас нет унаследованных файлов Office и нужно самое простое администрирование. Стартовые цены различаются на доллар; настоящая стоимость — переобучение и миграция.</p></div>
<div class="article__table-wrap"><table>
<thead><tr><th>Категория</th><th>Победитель</th><th>Почему</th></tr></thead>
<tbody>
<tr><td>Стартовая цена</td><td>Microsoft 365</td><td>Business Basic $6 против Workspace Starter $7 за пользователя в месяц</td></tr>
<tr><td>Настольные приложения</td><td>Microsoft 365</td><td>Word, Excel, PowerPoint, Outlook устанавливаются начиная с Business Standard; Google работает только в браузере</td></tr>
<tr><td>Совместная работа в реальном времени</td><td>Google Workspace</td><td>Совместное редактирование в Docs, Sheets и Slides быстрее и проще</td></tr>
<tr><td>Почта</td><td>Ничья</td><td>Gmail чище; Outlook сильнее в календарях и интеграции с Teams</td></tr>
<tr><td>Хранилище на пользователя</td><td>Google Workspace</td><td>2 ТБ на Standard против 1 ТБ OneDrive; на Starter только 30 ГБ</td></tr>
<tr><td>Безопасность для малого бизнеса</td><td>Microsoft 365</td><td>Business Premium включает Intune, Defender for Business и Entra ID P1 за $22</td></tr>
<tr><td>Простота администрирования</td><td>Google Workspace</td><td>Одна консоль, с которой справится руководитель без ИТ-подготовки</td></tr>
<tr><td>ИИ-ассистент</td><td>Google Workspace</td><td>Gemini включён в тарифы Business; Microsoft 365 Copilot — доплата $30</td></tr>
<tr><td>Хранение данных в ОАЭ</td><td>Microsoft 365</td><td>Есть регионы дата-центров в ОАЭ для большинства сервисов; Google хранит данные Workspace в глобальных регионах, если не куплены Enterprise-настройки региона</td></tr>
</tbody></table></div>`,
    },
    {
      title: 'Цены 2026: USD и AED за пользователя в месяц',
      text: `<p>Оба вендора берут плату за пользователя в месяц со скидкой за годовое обязательство. В таблице — прайс-лист для США при годовой оплате на октябрь 2026; реселлеры в ОАЭ выставляют счета в AED по курсу около 3,67 за доллар плюс 5% НДС, а региональные страницы Google периодически дают вводные скидки, поэтому колонку AED используйте для планирования и уточняйте у реселлера.</p>
<div class="article__table-wrap"><table>
<caption>Прайс США, годовая оплата, октябрь 2026. AED ≈ USD × 3,67, без НДС. Гибкая помесячная оплата обычно дороже на 20%.</caption>
<thead><tr><th>Тариф</th><th>USD / польз. / мес</th><th>≈ AED / польз. / мес</th><th>Хранилище</th><th>Настольные приложения</th><th>ИИ</th></tr></thead>
<tbody>
<tr><td>Microsoft 365 Business Basic</td><td>$6,00</td><td>AED 22</td><td>1 ТБ OneDrive, почтовый ящик 50 ГБ</td><td>Только веб и мобильные</td><td>Copilot Chat; полный Copilot +$30</td></tr>
<tr><td>Google Workspace Business Starter</td><td>$7,00</td><td>AED 26</td><td>30 ГБ общего пула</td><td>Нет</td><td>Gemini в Gmail</td></tr>
<tr><td>Microsoft 365 Apps for business</td><td>$8,25</td><td>AED 30</td><td>1 ТБ OneDrive, без почтового ящика Exchange</td><td>Да</td><td>Copilot +$30</td></tr>
<tr><td>Microsoft 365 Business Standard</td><td>$12,50</td><td>AED 46</td><td>1 ТБ OneDrive, почтовый ящик 50 ГБ</td><td>Да</td><td>Copilot +$30</td></tr>
<tr><td>Google Workspace Business Standard</td><td>$14,00</td><td>AED 51</td><td>2 ТБ общего пула</td><td>Нет</td><td>Gemini в Gmail, Docs, Meet</td></tr>
<tr><td>Microsoft 365 Business Premium</td><td>$22,00</td><td>AED 81</td><td>1 ТБ OneDrive, почтовый ящик 50 ГБ</td><td>Да</td><td>Copilot +$30</td></tr>
<tr><td>Google Workspace Business Plus</td><td>$22,00</td><td>AED 81</td><td>5 ТБ общего пула</td><td>Нет</td><td>Gemini во всех приложениях</td></tr>
</tbody></table></div>
<p>Для компании на 20 человек это примерно AED 5 300 в год на Business Basic или Workspace Starter и AED 11 000–12 300 в год на Business Standard или Workspace Standard. Стоимость лицензий редко определяет выбор: неделя потерянной продуктивности, пока бухгалтерия переучивается на другие таблицы, стоит больше, чем годовая разница в цене.</p>`,
      list: [
        'Стартовые тарифы $6 и $7; средние $12,50 и $14; старшие тарифы для малого бизнеса по $22',
        'Microsoft включает настольный Office начиная с Business Standard; у Google его нет',
        'Google даёт больше хранилища на пользователя; Microsoft — отдельный почтовый ящик 50 ГБ помимо файлов',
        'Gemini включён в Workspace; Microsoft 365 Copilot — доплата $30 за пользователя',
      ],
    },
    {
      title: 'Функции: совместная работа, почта и повседневные задачи',
      text: `<div class="article__table-wrap"><table>
<thead><tr><th>Функция</th><th>Google Workspace</th><th>Microsoft 365</th></tr></thead>
<tbody>
<tr><td>Почта</td><td>Gmail, 30 ГБ–5 ТБ в общем пуле с файлами</td><td>Exchange Online, почтовый ящик 50 ГБ на пользователя</td></tr>
<tr><td>Документы и таблицы</td><td>Docs, Sheets, Slides в браузере; быстрое совместное редактирование</td><td>Word, Excel, PowerPoint на компьютере, в вебе и на мобильных; самый глубокий Excel</td></tr>
<tr><td>Встречи и чат</td><td>Google Meet и Chat</td><td>Teams (чат, встречи, каналы, телефония как опция)</td></tr>
<tr><td>Файловое хранилище</td><td>Drive, общие диски</td><td>OneDrive и SharePoint</td></tr>
<tr><td>Работа офлайн</td><td>Офлайн-режим браузера</td><td>Полноценные настольные приложения</td></tr>
<tr><td>Консоль администратора</td><td>Одна, простая</td><td>Несколько порталов; больше тонких настроек</td></tr>
<tr><td>Экосистема сторонних сервисов</td><td>Marketplace, сильна у SaaS-стартапов</td><td>Крупнейшая бизнес-экосистема; интеграции с ERP и финансами</td></tr>
</tbody></table></div>
<p>Google Workspace изначально облачный: совместное редактирование в Docs и Sheets мгновенное, Gmail — один из самых удобных рабочих почтовых ящиков, а весь пакет одинаково работает на любом устройстве. Microsoft 365 сочетает отраслевой стандарт настольных приложений с Teams как центром чатов, встреч и файлов. Для финансов, инженеров и любой команды, которой нужен продвинутый Excel или сложное форматирование документов, глубину настольных приложений трудно превзойти. Доставляемость почты корпоративного уровня у обоих; разница в экосистеме вокруг.</p>`,
    },
    {
      title: 'Безопасность, комплаенс и хранение данных в ОАЭ',
      text: `<div class="article__table-wrap"><table>
<thead><tr><th>Контроль</th><th>Google Workspace</th><th>Microsoft 365</th></tr></thead>
<tbody>
<tr><td>Многофакторная аутентификация</td><td>Все тарифы</td><td>Все тарифы (Security Defaults); Conditional Access с Business Premium</td></tr>
<tr><td>Управление устройствами (MDM)</td><td>Базовое на всех тарифах; расширенное на Plus и Enterprise</td><td>Basic Mobility на всех тарифах; Intune в Business Premium</td></tr>
<tr><td>Защита от утечек (DLP)</td><td>Standard и выше (Drive), Plus для Gmail</td><td>Business Premium</td></tr>
<tr><td>Защита конечных точек</td><td>Не входит; сторонние решения</td><td>Defender for Business в Business Premium</td></tr>
<tr><td>eDiscovery и хранение</td><td>Vault в Business Plus</td><td>Purview в Business Premium</td></tr>
<tr><td>Хранение данных в ОАЭ</td><td>Глобальное хранение; политика региона данных только на тарифах Enterprise</td><td>Регионы UAE North и UAE Central; локальное хранение Exchange, SharePoint, OneDrive и Teams по запросу</td></tr>
<tr><td>Сертификации</td><td>ISO 27001/27017/27018, SOC 2/3</td><td>ISO 27001/27018, SOC 2/3, а также UAE IAR и отраслевые аттестации</td></tr>
</tbody></table></div>
<p>Обе платформы безопасны при правильной настройке: MFA, управление устройствами, шифрование и DLP есть с обеих сторон. Практических различий для малого бизнеса в ОАЭ два. Первое: Microsoft 365 Business Premium упаковывает защиту конечных точек, управление устройствами и политики идентификации в одну лицензию за $22, а клиенту Workspace приходится собирать это из сторонних продуктов. Второе: у Microsoft есть дата-центры в ОАЭ, что важно, если регулятор, банк или государственный заказчик спрашивает, где лежат данные; Google Workspace хранит данные в глобальных регионах, если не куплены Enterprise-настройки региона. Какой бы вариант вы ни выбрали, защищает именно настройка MFA, условного доступа и DLP; <a href="/ru/services/cloud">облачные услуги NOCKO</a> приводят любую из платформ к безопасной базовой конфигурации.</p>`,
      list: [
        'У обоих есть MFA, MDM, шифрование и DLP; что включено, решает выбранный тариф',
        'Business Premium — самый выгодный пакет безопасности для малого бизнеса с любой стороны',
        'У Microsoft есть регионы дата-центров в ОАЭ; у Workspace контроль региона только на Enterprise',
        'Безопасная настройка важнее логотипа вендора',
      ],
    },
    {
      title: 'ИИ-ассистенты: Gemini против Copilot',
      text: `<p>Google включает Gemini в Business Starter, Standard и Plus: резюме и черновики в Gmail, помощь в написании в Docs, формулы в Sheets и заметки встреч в Meet. Microsoft включает Copilot Chat во все бизнес-тарифы, но Copilot, который работает внутри Word, Excel, Outlook и Teams, — это отдельная лицензия <strong>Microsoft 365 Copilot</strong> за $30 за пользователя в месяц, что более чем удваивает стоимость Business Standard. Для компании на 20 человек это около AED 26 000 в год. Если ИИ внутри документов — приоритет, а бюджет ограничен, сегодня впереди Workspace; если нужен Copilot, покупайте его для нескольких ролей, которые будут пользоваться им ежедневно, а не для всех.</p>`,
    },
    {
      title: 'Что выбрать и как перейти',
      text: `<p><strong>Выбирайте Microsoft 365</strong>, если команда зависит от продвинутого Excel, сложных документов Word, календарей Outlook или Teams, если вы интегрируетесь с ERP или бухгалтерской системой, рассчитанной на Office, или если клиенты и регуляторы спрашивают о хранении данных в ОАЭ. Стоимость отказа от привычек Office обычно превышает любую экономию на лицензиях.</p><p><strong>Выбирайте Google Workspace</strong>, если вы браузерная команда с упором на совместную работу, стартап без унаследованного парка Office или компания, где один руководитель ведёт ИТ без выделенных специалистов. Вы получите больше хранилища, встроенный ИИ и самое простое администрирование за ту же или меньшую цену.</p><p>Переход — рутинная задача в ОАЭ. Почта, календари, контакты и файлы мигрируют поэтапной синхронизацией с контролируемым переключением, обычно за две–четыре недели для малого бизнеса. Наш <a href="/ru/case-studies/workspace-migration">кейс миграции Workspace</a> показывает поэтапный переезд без простоя. Относитесь к миграции как к проекту с пилотной группой, понятной коммуникацией и планом отката, а не как к переключению рубильника.</p>`,
      list: [
        'Microsoft 365: тяжёлый Excel, стандарт Outlook и Teams, интеграции с ERP, требования к хранению данных',
        'Google Workspace: работа в браузере, упор на совместную работу, стартапы, минимум администрирования',
        'Миграция у большинства малых компаний занимает 2–4 недели при поэтапном подходе',
        'Запустите пилотную группу и держите план отката до полного переключения',
      ],
    },
  ],
};

const faqItems = [
  {
    question: 'Что дешевле для малого бизнеса в ОАЭ — Google Workspace или Microsoft 365?',
    answer: 'Стартовые тарифы близки: Microsoft 365 Business Basic стоит $6, Google Workspace Business Starter — $7 за пользователя в месяц при годовой оплате, примерно AED 22 и AED 26 без НДС. Средние тарифы — $12,50 против $14. Итоговая стоимость больше зависит от переобучения, миграции и того, нужны ли настольный Office или Copilot, чем от цены лицензии.',
  },
  {
    question: 'Что лучше для компании на 10–25 человек — Microsoft 365 или Google Workspace?',
    answer: 'Если команда уже работает в Excel и Outlook, естественный выбор — Microsoft 365 Business Standard. Если команда совместно редактирует документы и не имеет файлов Office, Google Workspace Business Standard даёт больше хранилища и встроенный Gemini по похожей цене. Оба легко администрировать при таком размере.',
  },
  {
    question: 'Хранит ли Microsoft 365 данные в ОАЭ?',
    answer: 'Да. Microsoft использует регионы дата-центров UAE North и UAE Central и может хранить данные Exchange, SharePoint, OneDrive и Teams в ОАЭ для тенантов, созданных там. Google Workspace хранит данные в глобальных регионах; настройки региона данных доступны только на тарифах Enterprise.',
  },
  {
    question: 'Где лучше корпоративная почта — в Google Workspace или Microsoft 365?',
    answer: 'Обе платформы дают корпоративную почту на собственном домене с высокой доставляемостью и защитой от спама. Gmail ценят за чистый быстрый интерфейс и поиск; Outlook предпочитают команды, которым нужны продвинутые календари, общие ящики и тесная интеграция с Teams и приложениями Office.',
  },
  {
    question: 'Входит ли Copilot в бизнес-тарифы Microsoft 365?',
    answer: 'Copilot Chat входит, но Microsoft 365 Copilot — ассистент внутри Word, Excel, Outlook и Teams — это отдельная лицензия за $30 за пользователя в месяц. Google включает Gemini в тарифы Business Starter, Standard и Plus без доплаты.',
  },
  {
    question: 'Можно ли перейти с одной платформы на другую без потери данных?',
    answer: 'Да. Почта, календари, контакты и документы мигрируют между Google Workspace и Microsoft 365 поэтапной синхронизацией с контролируемым переключением, обычно за две–четыре недели для малого бизнеса. Поэтапный план с пилотной группой и вариантом отката сохраняет продуктивность пользователей.',
  },
];

export default function GoogleWorkspaceVsMicrosoft365RuPage() {
  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title,
          description: metadata.description,
          url: 'https://nocko.com/ru/articles/google-workspace-vs-microsoft-365',
          inLanguage: 'ru-RU',
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <ArticleByline locale="ru" published={PUBLISHED} modified={MODIFIED} />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Главная', href: '/ru' }, { label: 'Услуги', href: '/ru/services' }, { label: 'Облачные решения', href: '/ru/services/cloud' }, { label: 'Google Workspace или Microsoft 365' }]} />
          <div className="article">
            <ArticleContent
              locale="ru"
              intro={articleData.intro}
              blocks={articleData.blocks}
              relatedArticles={[
                { href: '/ru/services/cloud', title: 'Облачные решения', description: 'Внедрение, миграция и безопасная настройка Microsoft 365 и Google Workspace.' },
                { href: '/ru/services/it-support', title: 'ИТ поддержка', description: 'Хелпдеск 24/7 для пользователей Microsoft 365 и Workspace в ОАЭ.' },
                { href: '/ru/case-studies/workspace-migration', title: 'Миграция Workspace без простоя', description: 'Как гостиничная группа в Дубае перенесла все ящики без остановки работы.' },
              ]}
            />
          </div>
        </div>

        <FAQAccordion
          title="Google Workspace или Microsoft 365: частые вопросы"
          items={faqItems}
        />
      </main>
      <Footer />
    </>
  );
}
