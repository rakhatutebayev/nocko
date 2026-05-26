import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Интеграция SaaS и внедрение M365 | NOCKO ОАЭ',
  description: 'NOCKO переводит предприятия ОАЭ с устаревшего Exchange на Microsoft 365, реструктурирует файловые хранилища в SharePoint и внедряет политики DLP и условного доступа в соответствии с требованиями TDRA.',
  alternates: {
    canonical: '/ru/articles/cloud-infrastructure',
    languages: {
      'en-AE': '/articles/cloud-infrastructure',
      'ru-RU': '/ru/articles/cloud-infrastructure',
    },
  },
  openGraph: {
    locale: 'ru_RU',
  },
  robots: { index: false, follow: true },
};

const articleData = {
  hero: {
    title: 'Интеграция SaaS и внедрение M365',
    subtitle: 'Переведите удалённую команду на единую современную инфраструктуру',
    description: 'Мы переносим устаревшие Exchange-окружения в современный Entra ID и M365.',
  },
  intro: 'Мы выполняем бесшовную миграцию крупных корпораций из устаревших локальных почтовых систем напрямую в Microsoft 365 или Google Workspace. Это не просто про электронную почту: мы полностью реструктурируем файловые хранилища в архитектуру SharePoint и применяем строгие политики предотвращения утечки данных (DLP) с условным доступом.',
  blocks: [
    {
      title: 'Миграция в Microsoft 365 и настройка тенанта',
      text: '<p>Мы мигрируем почтовые ящики Exchange on-premise в Exchange Online с помощью Microsoft Hybrid Configuration Wizard, обеспечивая непрерывность почтового потока во время переключения. Active Directory синхронизируется с Entra ID (бывший Azure AD) через Azure AD Connect, а сам Entra ID P2 настраивается с политиками условного доступа, ограничивающими вход по статусу соответствия устройства и именованному расположению (диапазоны IP ОАЭ).</p><p>После миграции мы реорганизуем сетевые диски в библиотеки документов SharePoint с ролевыми разрешениями, заменяя открытые общие диски — типичный вектор утечки данных в офисах ОАЭ.</p>',
      list: [
        'Гибридная миграция в Exchange Online без прерывания почтового потока',
        'Настройка SSO в Entra ID для всех бизнес-приложений',
        'Политики условного доступа на основе местоположения и соответствия устройства',
        'Архитектура SharePoint вместо устаревших разрешений на файловых хранилищах',
        'Политики DLP для блокировки случайного внешнего доступа к конфиденциальным документам',
      ],
    },
    {
      title: 'Интеграция Google Workspace в смешанных средах',
      text: '<p>Некоторые компании ОАЭ работают в разделённой среде: отдел продаж использует Google Workspace, а финансы — M365. Мы настраиваем Google Cloud Directory Sync и федерацию на основе SAML для единого входа на обеих платформах, устраняя усталость от паролей и сокращая поверхность атаки за счёт дублирующих наборов учётных данных.</p><p>Мы также развёртываем правила DLP Google Workspace для Gmail и Google Drive, предотвращая случайную утечку данных через личные аккаунты — распространённый пробел в соответствии требованиям у организаций, регулируемых DIFC и ADGM.</p>',
    },
    {
      title: 'Лицензирование и оптимизация расходов',
      text: '<p>Лицензирование M365 в ОАЭ зачастую избыточно — компании покупают E3 для каждого сотрудника, тогда как большинству достаточно F3 или Business Standard. Мы аудируем распределение лицензий в сравнении с реальным использованием функций и перераспределяем или понижаем уровень там, где это оправданно. Для компании из 100 сотрудников это, как правило, экономит 8 000–15 000 AED в год.</p><p>Мы также управляем ежегодным циклом продления через CSP-партнёрское ценообразование Microsoft, гарантируя, что вы не обновите контракт по истёкшим льготным ставкам и не пропустите окна скидок за обязательства.</p>',
    },
    {
      title: 'Часто задаваемые вопросы',
      text: '',
      list: [
        '<strong>В: Сколько времени занимает миграция с Exchange на M365 для компании из 100 человек?</strong><br/>О: Как правило, 2–3 уик-энда. В первый уик-энд мы настраиваем гибридную среду и синхронизируем каталоги. Во второй — мигрируем почтовые ящики пакетами. В третий проводим финальное переключение и обновление DNS.',
        '<strong>В: Потеряют ли сотрудники доступ к почте во время миграции?</strong><br/>О: Нет — гибридный режим поддерживает одновременную работу Exchange on-premise и Exchange Online в ходе миграции, поэтому пользователи продолжают получать и отправлять почту без перебоев.',
        '<strong>В: Вы поддерживаете миграцию с Google Workspace на M365?</strong><br/>О: Да — мы используем Microsoft Migration Manager для импорта содержимого Google Drive и истории Gmail в SharePoint и Exchange Online соответственно.',
        '<strong>В: Будет ли работать условный доступ для сотрудников в командировках за пределами ОАЭ?</strong><br/>О: Да — мы настраиваем именованные расположения и политики доверенных устройств таким образом, чтобы командированные сотрудники проходили аутентификацию через MFA, а не блокировались, при этом сохраняя защиту от входа с неизвестных устройств.',
      ],
    },
  ],
};

export default function CloudinfrastructurePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-01-22', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Главная', href: '/ru' }, { label: 'Услуги', href: '/ru/services' }, { label: 'Облачные Решения', href: '/ru/services/cloud' }, { label: 'Статья' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
