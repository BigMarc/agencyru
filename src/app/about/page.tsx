import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollAnimation from '@/components/ScrollAnimation';
import HubSpotForm from '@/components/HubSpotForm';

export const metadata: Metadata = {
  title: 'О нас — Bunny Agency | Лучшее агентство OnlyFans в России',
  description:
    'Узнайте больше о Bunny Agency — ведущем агентстве OnlyFans в России. Наша миссия, команда и ценности. Мы помогаем креаторам достигать шестизначного дохода.',
  alternates: {
    canonical: 'https://bunny-agency.ru/about',
  },
  openGraph: {
    title: 'О нас — Bunny Agency | Лучшее агентство OnlyFans в России',
    description:
      'Узнайте больше о Bunny Agency — ведущем агентстве OnlyFans в России. Наша миссия, команда и ценности.',
    url: 'https://bunny-agency.ru/about',
    siteName: 'Bunny Agency Russia',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
        width: 2048,
        height: 1117,
        alt: 'Bunny Agency — агентство OnlyFans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О нас — Bunny Agency | Лучшее агентство OnlyFans в России',
    description:
      'Узнайте больше о Bunny Agency — ведущем агентстве OnlyFans в России. Наша миссия, команда и ценности.',
    images: [
      'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
    ],
  },
};

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bunny Agency',
    url: 'https://bunny-agency.ru',
    logo: 'https://bunny-agency.ru/favicon.ico',
    description:
      'Bunny Agency — ведущее агентство OnlyFans в России, помогающее креаторам масштабировать доход и достигать финансовой свободы.',
    foundingDate: '2022',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1309 Coffeen Avenue STE 1200',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.instagram.com/bunnyagency',
      'https://twitter.com/bunnyagency',
      'https://www.tiktok.com/@bunnyagency',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ===== BREADCRUMBS ===== */}
      <section className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'О нас' },
            ]}
          />
        </div>
      </section>

      {/* ===== HERO / H1 SECTION ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
                  О Bunny Agency —{' '}
                  <span className="text-accent">
                    Ваше агентство по управлению OnlyFans
                  </span>
                </h1>
                <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
                  Мы создали Bunny Agency с одной целью — дать креаторам OnlyFans
                  инструменты, команду и стратегию, которые позволяют
                  сосредоточиться на творчестве и зарабатывать больше. Наше
                  агентство OnlyFans объединяет экспертов в маркетинге,
                  менеджменте и аналитике, чтобы каждый креатор мог раскрыть свой
                  полный потенциал.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <Image
                src="https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp"
                alt="Агентство OnlyFans — ценности и миссия Bunny Agency"
                width={2048}
                height={1117}
                priority
                className="rounded-2xl shadow-2xl shadow-accent/10"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Наша миссия как{' '}
                <span className="text-accent">агентства OnlyFans</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollAnimation delay={100}>
              <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-10">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Bunny Agency было основано группой профессионалов в области
                  цифрового маркетинга и управления контентом, которые увидели
                  огромный разрыв между потенциалом креаторов и их реальными
                  доходами. Мы поняли, что большинство талантливых авторов
                  контента проигрывают не потому, что создают плохой контент, а
                  потому что не имеют доступа к профессиональному менеджменту,
                  маркетинговым стратегиям и круглосуточной команде поддержки.
                  Именно поэтому мы создали агентство OnlyFans, которое закрывает
                  все эти потребности.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-10">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Сегодня наше агентство OnlyFans управляет аккаунтами более 500
                  креаторов по всему миру и помогло заработать суммарно свыше $50
                  миллионов. За каждой цифрой стоит реальная история успеха:
                  креаторы, которые приходили к нам с доходом $500 в месяц, через
                  полгода выходили на стабильные $20,000–$50,000 ежемесячно. Мы
                  не просто управляем аккаунтами — мы строим устойчивые бизнесы
                  для наших моделей, обеспечивая долгосрочный рост и финансовую
                  независимость.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-10">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Миссия Bunny Agency — сделать профессиональное управление
                  OnlyFans доступным для каждого амбициозного креатора. Мы верим,
                  что каждый автор контента заслуживает команду экспертов,
                  которая будет работать на его успех 24 часа в сутки. Наше
                  агентство OnlyFans предоставляет полный спектр услуг: от
                  стратегического маркетинга и профессионального чатинга до DMCA
                  защиты и аналитики доходов, — чтобы вы могли сосредоточиться
                  исключительно на создании уникального контента.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== TEAM & VALUES SECTION ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Команда и ценности{' '}
                <span className="text-accent">Bunny Agency</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                За каждым успешным креатором стоит наша команда из более чем 50
                специалистов, объединённых общими ценностями и стремлением к
                результату.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Прозрачность',
                description:
                  'Мы верим в полную открытость перед нашими креаторами. Как агентство OnlyFans мы предоставляем детальную отчётность о доходах, расходах и результатах маркетинговых кампаний. Вы всегда знаете, куда идут ваши деньги.',
              },
              {
                title: 'Результат',
                description:
                  'Наше агентство OnlyFans работает по модели, при которой наш заработок напрямую зависит от вашего успеха. Это гарантирует максимальную мотивацию всей команды: мы зарабатываем только тогда, когда зарабатываете вы.',
              },
              {
                title: 'Конфиденциальность',
                description:
                  'Защита вашей личности и контента — наш абсолютный приоритет. Мы предлагаем опции полной анонимности, DMCA защиту и строгие протоколы безопасности данных для каждого креатора нашего агентства OnlyFans.',
              },
              {
                title: 'Индивидуальный подход',
                description:
                  'Каждый креатор уникален, и мы это ценим. Наше агентство OnlyFans разрабатывает персональную стратегию роста, учитывая вашу нишу, аудиторию, цели и стиль контента.',
              },
              {
                title: 'Инновации',
                description:
                  'Индустрия цифрового контента стремительно меняется, и мы всегда на шаг впереди. Как агентство OnlyFans мы постоянно тестируем новые маркетинговые каналы, стратегии монетизации и инструменты роста.',
              },
              {
                title: 'Поддержка 24/7',
                description:
                  'Наша команда работает круглосуточно, без выходных и праздников. Агентство OnlyFans Bunny Agency обеспечивает непрерывную поддержку: чатинг с подписчиками, мониторинг аккаунта и оперативное решение любых вопросов.',
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-surface border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="text-white font-bold text-xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY BUNNY AGENCY EXISTS SECTION ===== */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8">
                  Почему существует{' '}
                  <span className="text-accent">Bunny Agency</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-text-secondary text-lg leading-relaxed">
                    OnlyFans открыл невероятные возможности для авторов контента
                    по всему миру, но успех на платформе требует гораздо больше,
                    чем просто создание фотографий и видео. Профессиональный
                    чатинг, стратегический маркетинг, аналитика, защита контента
                    и удержание подписчиков — всё это критически важные элементы,
                    которые определяют разницу между доходом в $500 и $50,000 в
                    месяц.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Bunny Agency существует, чтобы дать каждому креатору доступ к
                    профессиональной инфраструктуре, которая раньше была доступна
                    только единицам. Наше агентство OnlyFans — это не просто
                    сервис, а полноценный бизнес-партнёр, который инвестирует в
                    ваш рост и разделяет с вами путь к успеху. Мы объединили
                    лучших специалистов индустрии, чтобы вы могли заниматься тем,
                    что любите, а мы позаботимся обо всём остальном.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-background border border-white/10 rounded-2xl p-8 sm:p-10">
                <h3 className="text-white font-bold text-2xl mb-6">
                  Bunny Agency в цифрах
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '500+', label: 'Креаторов под управлением' },
                    { value: '$50M+', label: 'Заработано для моделей' },
                    { value: '50+', label: 'Специалистов в команде' },
                    { value: '24/7', label: 'Поддержка и чатинг' },
                    { value: 'Топ 0.1%', label: 'Средний рейтинг креаторов' },
                    { value: '3–5x', label: 'Рост дохода за 90 дней' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-accent text-2xl sm:text-3xl font-extrabold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-text-secondary text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== BACK TO HOMEPAGE LINK ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="text-text-secondary text-lg mb-6">
              Хотите узнать больше о наших услугах, результатах и условиях
              сотрудничества?
            </p>
            <Link
              href="/"
              className="text-accent hover:text-accent/80 text-lg font-semibold transition-colors underline underline-offset-4"
            >
              Вернуться на главную — агентство OnlyFans Bunny Agency
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== CTA + APPLICATION FORM ===== */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Присоединяйтесь к лучшему{' '}
                <span className="text-accent">агентству OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Готовы масштабировать свой доход с профессиональной командой
                Bunny Agency? Заполните короткую заявку ниже — это займёт не
                более 2 минут. Наше агентство OnlyFans свяжется с вами в
                течение 24 часов.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="bg-background border border-white/10 rounded-2xl p-8">
              <HubSpotForm />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <p className="text-center text-text-secondary text-sm mt-8">
              Подача заявки бесплатна и ни к чему не обязывает. Мы обсудим все
              условия на личном звонке.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
