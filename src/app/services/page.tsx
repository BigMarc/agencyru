import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Settings,
  TrendingUp,
  MessageCircle,
  Shield,
  ClipboardCheck,
  UserCheck,
  CalendarDays,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Megaphone,
  Lock,
  BarChart3,
  Clock,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollAnimation from '@/components/ScrollAnimation';
import HubSpotForm from '@/components/HubSpotForm';

export const metadata: Metadata = {
  title:
    'Услуги агентства OnlyFans — Управление, Маркетинг, Чатинг | Bunny Agency',
  description:
    'Полный спектр услуг агентства OnlyFans от Bunny Agency: управление аккаунтом, вирусный маркетинг, профессиональные чаттеры 24/7, DMCA защита контента. Узнайте подробнее о каждой услуге.',
  alternates: {
    canonical: 'https://bunny-agency.ru/services',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://bunny-agency.ru/services',
    siteName: 'Bunny Agency Russia',
    title:
      'Услуги агентства OnlyFans — Управление, Маркетинг, Чатинг | Bunny Agency',
    description:
      'Полный спектр услуг агентства OnlyFans от Bunny Agency: управление аккаунтом, вирусный маркетинг, профессиональные чаттеры 24/7, DMCA защита контента.',
    images: [
      {
        url: 'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
        width: 2048,
        height: 1117,
        alt: 'Услуги агентства OnlyFans — Bunny Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Услуги агентства OnlyFans — Управление, Маркетинг, Чатинг | Bunny Agency',
    description:
      'Полный спектр услуг агентства OnlyFans от Bunny Agency: управление, маркетинг, чаттеры 24/7, DMCA защита.',
    images: [
      'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
    ],
  },
};

export default function ServicesPage() {
  const serviceSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'OnlyFans Account Management',
      name: 'Полное управление аккаунтом OnlyFans',
      description:
        'Ежедневные публикации, планирование контента, стратегия PPV-сообщений и оптимизация ценообразования для максимального дохода на OnlyFans.',
      provider: {
        '@type': 'Organization',
        name: 'Bunny Agency',
        url: 'https://bunny-agency.ru',
      },
      areaServed: 'Worldwide',
      url: 'https://bunny-agency.ru/services',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'OnlyFans Marketing',
      name: 'Маркетинг и вирусный рост OnlyFans',
      description:
        'Мультиплатформенное продвижение OnlyFans через TikTok, Instagram Reels, Reddit, Twitter/X с кросс-платформенными воронками привлечения подписчиков.',
      provider: {
        '@type': 'Organization',
        name: 'Bunny Agency',
        url: 'https://bunny-agency.ru',
      },
      areaServed: 'Worldwide',
      url: 'https://bunny-agency.ru/services',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'OnlyFans Chatting Services',
      name: 'Профессиональные чаттеры OnlyFans 24/7',
      description:
        'Выделенная команда чаттеров для круглосуточного общения с подписчиками, максимизации продаж PPV и повышения вовлечённости.',
      provider: {
        '@type': 'Organization',
        name: 'Bunny Agency',
        url: 'https://bunny-agency.ru',
      },
      areaServed: 'Worldwide',
      url: 'https://bunny-agency.ru/services',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'DMCA Protection and Content Security',
      name: 'DMCA защита и безопасность контента',
      description:
        'Мониторинг утечек контента, оперативные DMCA-заявки на удаление и анонимное управление аккаунтом OnlyFans.',
      provider: {
        '@type': 'Organization',
        name: 'Bunny Agency',
        url: 'https://bunny-agency.ru',
      },
      areaServed: 'Worldwide',
      url: 'https://bunny-agency.ru/services',
    },
  ];

  return (
    <>
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ===== HERO / HEADER ===== */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Услуги' },
            ]}
          />
          <ScrollAnimation>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 mt-4">
              Услуги агентства OnlyFans от{' '}
              <span className="text-accent">Bunny Agency</span>
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-3xl mb-8">
              Наше агентство OnlyFans предоставляет полный спектр
              профессиональных услуг для креаторов: от управления аккаунтом и
              вирусного маркетинга до круглосуточного чатинга и DMCA защиты.
              Каждая услуга разработана для максимизации вашего дохода и
              минимизации вашей операционной нагрузки.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Settings className="w-4 h-4" />, label: 'Управление' },
                { icon: <Megaphone className="w-4 h-4" />, label: 'Маркетинг' },
                { icon: <MessageCircle className="w-4 h-4" />, label: 'Чатинг 24/7' },
                { icon: <Shield className="w-4 h-4" />, label: 'DMCA защита' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 bg-surface border border-white/10 text-text-secondary px-4 py-2 rounded-full text-sm"
                >
                  <span className="text-accent">{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SERVICE 1: ACCOUNT MANAGEMENT ===== */}
      <section id="management" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-surface border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <Settings className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  Полное управление аккаунтом OnlyFans
                </h2>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Когда вы доверяете управление аккаунтом нашему агентству
                OnlyFans, мы берём на себя абсолютно все аспекты ежедневной
                работы вашего профиля. Наши менеджеры обеспечивают регулярные
                ежедневные публикации в оптимальное время, составляют детальный
                контент-план на недели вперёд и следят за тем, чтобы ваша лента
                была разнообразной и привлекательной для подписчиков. Мы
                анализируем статистику каждого поста, определяем наиболее
                успешные форматы и адаптируем стратегию контента для
                максимального вовлечения аудитории.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Стратегия PPV-сообщений — ключевой инструмент монетизации,
                которым владеет наше агентство OnlyFans. Мы разрабатываем
                индивидуальные PPV-кампании, сегментируем вашу аудиторию по
                уровню вовлечённости и платёжеспособности, создаём
                персонализированные предложения для каждого сегмента. Правильная
                стратегия PPV способна увеличить ваш доход в 2-4 раза без
                необходимости создания дополнительного контента — мы точно
                знаем, когда, кому и по какой цене отправлять эксклюзивные
                материалы.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Оптимизация ценообразования — ещё одна область, где наше
                агентство OnlyFans демонстрирует экспертизу. Мы проводим
                A/B-тестирование цен подписки, анализируем ценовую
                эластичность вашей аудитории и находим идеальный баланс между
                количеством подписчиков и стоимостью подписки. Наш
                дата-ориентированный подход к ценообразованию гарантирует, что
                вы получаете максимальный доход с каждого подписчика, при этом
                сохраняя стабильный приток новой аудитории.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Ежедневные публикации в оптимальное время',
                  'Планирование контента на недели вперёд',
                  'Разработка PPV-стратегии и сегментация аудитории',
                  'A/B-тестирование цен подписки',
                  'Анализ статистики и корректировка стратегии',
                  'Персональный менеджер аккаунта',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SERVICE 2: MARKETING ===== */}
      <section id="marketing" className="py-16 sm:py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  Маркетинг и вирусный рост OnlyFans
                </h2>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Маркетинг — это двигатель роста любого аккаунта OnlyFans, и
                наше агентство OnlyFans владеет передовыми стратегиями
                продвижения на всех ключевых платформах. Мы создаём вирусный
                контент для TikTok, который привлекает миллионы просмотров и
                направляет трафик на ваш OnlyFans. Наши специалисты по
                Instagram Reels разрабатывают визуально привлекательные ролики,
                которые попадают в рекомендации и обеспечивают постоянный
                органический приток новой аудитории. Каждая платформа
                используется стратегически с учётом её уникальных алгоритмов и
                демографии пользователей.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Reddit и Twitter/X являются мощнейшими каналами привлечения
                подписчиков, и наше агентство OnlyFans знает, как использовать
                их потенциал на максимум. Мы ведём продвижение в целевых
                сабреддитах, создаём вовлекающие посты, которые собирают тысячи
                апвоутов, и выстраиваем стратегию присутствия, не нарушающую
                правила площадок. На Twitter/X мы реализуем стратегии
                вирального распространения, используя тренды, хештеги и
                коллаборации с другими креаторами для экспоненциального роста
                вашей видимости.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Кросс-платформенные воронки — это то, что отличает
                профессиональное агентство OnlyFans от самостоятельного
                продвижения. Мы выстраиваем многоуровневые воронки
                привлечения, где каждая социальная сеть играет определённую
                роль: TikTok генерирует охваты, Instagram прогревает
                аудиторию, Twitter конвертирует, а Reddit обеспечивает
                стабильный поток целевого трафика. Результат — непрерывный рост
                подписчиков и дохода без зависимости от одной платформы.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Вирусный маркетинг в TikTok и Instagram Reels',
                  'Стратегическое продвижение на Reddit',
                  'Рост аудитории в Twitter/X',
                  'Кросс-платформенные воронки привлечения',
                  'Коллаборации с другими креаторами',
                  'Аналитика эффективности каждого канала',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SERVICE 3: CHATTING ===== */}
      <section id="chatting" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-surface border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <MessageCircle className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  Профессиональные чаттеры OnlyFans 24/7
                </h2>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Чатинг — основной источник дохода на OnlyFans, и наше
                агентство OnlyFans предоставляет выделенную команду
                профессиональных чаттеров, которые работают с вашим аккаунтом
                круглосуточно, 7 дней в неделю. Каждый чаттер проходит
                многоэтапное обучение, изучает вашу личность, стиль общения и
                предпочтения аудитории. Мы создаём детальные скрипты и
                персонализированные шаблоны, которые неотличимы от вашего
                собственного общения. Подписчики получают мгновенные ответы в
                любое время суток, что кардинально повышает их лояльность и
                готовность к покупкам.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Продажи PPV через чат — это искусство, которым мастерски
                владеет команда нашего агентства OnlyFans. Наши чаттеры
                выстраивают долгосрочные отношения с подписчиками, прогревают
                их через естественный диалог и предлагают PPV-контент в
                идеальный момент, когда вероятность покупки максимальна. Мы
                используем продвинутые техники продаж: от создания ощущения
                эксклюзивности до персональных скидок для лояльных подписчиков.
                Средний рост дохода от чата после подключения наших чаттеров
                составляет 300-500%.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Персонализированное общение — визитная карточка нашего
                агентства OnlyFans. Каждый подписчик чувствует себя особенным
                благодаря индивидуальному подходу наших чаттеров. Мы ведём базу
                данных предпочтений каждого подписчика, запоминаем детали
                предыдущих разговоров и создаём ощущение настоящей связи. Такой
                подход не только увеличивает продажи, но и значительно
                повышает retention rate — подписчики остаются с вами месяцами
                и годами, обеспечивая стабильный предсказуемый доход.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Выделенная команда чаттеров 24/7',
                  'Максимизация PPV-продаж через диалог',
                  'Персонализированные скрипты общения',
                  'База данных предпочтений подписчиков',
                  'Повышение вовлечённости и лояльности',
                  'Рост retention rate до 80%+',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SERVICE 4: DMCA PROTECTION ===== */}
      <section id="dmca" className="py-16 sm:py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  DMCA защита и безопасность контента
                </h2>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Защита контента — критически важный аспект работы на OnlyFans,
                и наше агентство OnlyFans обеспечивает комплексный мониторинг
                утечек вашего контента по всему интернету. Мы используем
                продвинутые инструменты автоматического сканирования, которые
                ежедневно проверяют сотни сайтов, форумов и файлообменников на
                наличие вашего контента. При обнаружении утечки наша команда
                немедленно инициирует процедуру удаления — в среднем
                пиратский контент удаляется в течение 24-48 часов после
                обнаружения.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Оперативные DMCA-заявки — ключевой инструмент защиты ваших
                авторских прав. Наше агентство OnlyFans имеет отработанные
                процессы подачи DMCA takedown notices поисковым системам,
                хостинг-провайдерам и платформам социальных сетей. Мы работаем
                с юридическими партнёрами, которые при необходимости
                эскалируют процесс до судебных мер. За время работы мы
                успешно удалили десятки тысяч единиц пиратского контента наших
                креаторов, защитив их интеллектуальную собственность и доход.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Анонимное управление аккаунтом — уникальная опция нашего
                агентства OnlyFans для тех, кто ценит конфиденциальность. Мы
                помогаем вести аккаунт полностью анонимно: от использования
                псевдонимов и масок до настройки геоблокировки и защиты
                персональных данных. Наша команда обеспечивает полную
                безопасность вашей личности, чтобы вы могли зарабатывать на
                OnlyFans без опасений. Конфиденциальность каждого креатора —
                наш абсолютный приоритет.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Автоматический мониторинг утечек 24/7',
                  'Оперативные DMCA-заявки на удаление',
                  'Анонимное управление аккаунтом',
                  'Геоблокировка и защита персональных данных',
                  'Сотрудничество с юридическими партнёрами',
                  'Аудит безопасности аккаунта',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== ADDITIONAL SERVICES (LONG-TAIL) ===== */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Дополнительные услуги{' '}
                <span className="text-accent">агентства OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Помимо основных направлений, наше агентство OnlyFans предлагает
                ряд специализированных услуг для точечной оптимизации вашего
                аккаунта.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <div className="bg-surface border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <ClipboardCheck className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-white">
                    Аудит OnlyFans
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Комплексный аудит вашего аккаунта OnlyFans от специалистов
                  нашего агентства. Мы анализируем профиль, контент-стратегию,
                  ценообразование, показатели удержания и чатинга. По итогам
                  аудита вы получаете подробный отчёт с конкретными
                  рекомендациями по увеличению дохода. Этот аудит выявляет
                  скрытые точки роста, которые большинство креаторов
                  упускают.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-surface border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <UserCheck className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-white">
                    Стратегия удержания подписчиков
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Удержание подписчиков — не менее важный фактор дохода, чем
                  привлечение новых. Наше агентство OnlyFans разрабатывает
                  индивидуальные стратегии retention: программы лояльности,
                  эксклюзивные предложения для долгосрочных подписчиков,
                  системы реактивации ушедших фанов. Мы снижаем churn rate и
                  превращаем разовых подписчиков в постоянных.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-surface border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <CalendarDays className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-white">
                    Управление контент-календарём
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Консистентность публикаций — залог роста на OnlyFans. Наше
                  агентство OnlyFans составляет детальный контент-календарь на
                  месяц вперёд, учитывающий сезонность, тренды и предпочтения
                  вашей аудитории. Мы планируем тематические серии, специальные
                  акции и PPV-кампании так, чтобы каждый день работал на
                  максимальный доход.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-surface border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <DollarSign className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-white">
                    Оптимизация ценообразования
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Правильная цена подписки и PPV-контента критически влияет
                  на общий доход. Наше агентство OnlyFans использует
                  дата-ориентированный подход: анализ конкурентов, тестирование
                  ценовых точек, изучение платёжеспособности аудитории и
                  динамическое ценообразование. Мы находим идеальную цену,
                  которая максимизирует выручку без потери подписчиков.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE BUNNY AGENCY ===== */}
      <section className="py-16 sm:py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Почему Bunny Agency — лучшее{' '}
                <span className="text-accent">агентство OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Более 500 креаторов доверяют нашему агентству OnlyFans
                управление своими аккаунтами. Вот что отличает нас от
                конкурентов.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: '$50M+ заработано',
                description:
                  'Наше агентство OnlyFans заработало свыше $50 миллионов для наших креаторов.',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Поддержка 24/7',
                description:
                  'Круглосуточная команда чаттеров, менеджеров и маркетологов.',
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Полная безопасность',
                description:
                  'DMCA защита, анонимность и конфиденциальность каждого креатора.',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Топ 0.1% рейтинг',
                description:
                  'Средний рейтинг наших креаторов — топ 0.1% на платформе OnlyFans.',
              },
            ].map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 100}>
                <div className="bg-background border border-white/10 rounded-2xl p-6 text-center h-full">
                  <div className="text-accent mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + HUBSPOT FORM ===== */}
      <section id="apply" className="py-20 sm:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Начните работать с лучшим{' '}
                <span className="text-accent">агентством OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
                Подайте заявку в Bunny Agency прямо сейчас и получите доступ ко
                всем услугам нашего агентства OnlyFans. Онбординг занимает не
                более 48 часов — мы начнём масштабировать ваш доход уже на
                этой неделе.
              </p>
              <p className="text-text-secondary">
                Присоединяйтесь к 500+ успешным креаторам.{' '}
                <Link
                  href="/"
                  className="text-accent hover:underline font-semibold"
                >
                  Узнайте больше о Bunny Agency — ведущем агентстве OnlyFans
                </Link>
                .
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <HubSpotForm />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== INTERNAL LINKING ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Bunny Agency — это профессиональное агентство OnlyFans,
              предлагающее полный цикл услуг для креаторов по всему миру. Наша
              команда экспертов поможет вам выйти на стабильный шестизначный
              доход с помощью проверенных стратегий управления, маркетинга и
              монетизации.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent hover:underline font-semibold text-lg"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
                Главная страница агентства OnlyFans Bunny Agency
              </Link>
              <Link
                href="/apply"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Подать заявку сейчас
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
