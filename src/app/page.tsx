import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Users,
  TrendingUp,
  MessageCircle,
  Shield,
  Zap,
  Target,
  Clock,
  BarChart3,
  HeadphonesIcon,
  CheckCircle2,
  XCircle,
  Send,
  Settings,
  Rocket,
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import ComparisonTable from '@/components/ComparisonTable';
import FAQAccordion from '@/components/FAQAccordion';
import HubSpotForm from '@/components/HubSpotForm';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Агентство OnlyFans — #1 Управление Контентом | Bunny Agency',
  description:
    'Bunny Agency — лучшее агентство OnlyFans в России. Управление аккаунтом, маркетинг, чат-команда 24/7 и DMCA защита. Подайте заявку сейчас!',
  alternates: {
    canonical: 'https://bunny-agency.ru',
  },
};

const stats = [
  { value: '500+', label: 'Креаторов под управлением' },
  { value: '$50M+', label: 'Заработано для моделей' },
  { value: 'Топ 0.1%', label: 'Средний рейтинг' },
  { value: '24/7', label: 'Команда поддержки' },
];

const testimonials = [
  {
    name: 'Алина К.',
    niche: 'Фитнес и лайфстайл',
    quote:
      'За первые 3 месяца с Bunny Agency мой доход вырос с $2,000 до $27,000 в месяц. Их агентство OnlyFans полностью изменило мою карьеру — от маркетинга до чат-менеджмента всё работает как часы.',
    rating: 5,
  },
  {
    name: 'Марина Д.',
    niche: 'Модельный бизнес',
    quote:
      'Я пробовала вести OnlyFans самостоятельно и выгорала. Bunny Agency взяли на себя весь менеджмент — чатинг, маркетинг, стратегию контента. Теперь я в топ 0.05% и сосредоточена только на контенте.',
    rating: 5,
  },
  {
    name: 'Виктория С.',
    niche: 'Косплей и творчество',
    quote:
      'Лучшее агентство OnlyFans, с которым я работала. Профессиональная команда, прозрачная отчётность, постоянный рост подписчиков. За полгода мой доход увеличился в 8 раз.',
    rating: 5,
  },
];

const comparisonRows = [
  { feature: 'Профессиональный чатинг 24/7', solo: false, agency: true },
  { feature: 'Маркетинг и продвижение', solo: false, agency: true },
  { feature: 'Стабильный высокий доход', solo: false, agency: true },
  { feature: 'Стратегия контента', solo: false, agency: true },
  { feature: 'DMCA защита контента', solo: false, agency: true },
  { feature: 'Минимальные затраты времени', solo: false, agency: true },
];

const faqItems = [
  {
    question: 'Что такое агентство по управлению OnlyFans?',
    answer:
      'Агентство OnlyFans — это профессиональная управляющая компания, которая помогает креаторам максимизировать доход на платформе OnlyFans. Мы берём на себя весь менеджмент: от чатинга с подписчиками и маркетинговых стратегий до защиты контента и оптимизации цен. Bunny Agency — ведущее агентство OnlyFans, которое помогает сотням креаторов достигать стабильного шестизначного дохода.',
  },
  {
    question: 'Сколько стоят услуги агентства OnlyFans?',
    answer:
      'Наше агентство OnlyFans работает по модели комиссионного вознаграждения — мы зарабатываем процент от вашего дохода. Конкретные условия обсуждаются индивидуально на этапе онбординга. Такая модель гарантирует, что наши интересы полностью совпадают с вашими: мы зарабатываем только тогда, когда зарабатываете вы.',
  },
  {
    question: 'Нужны ли мне профессиональные фотографии для вступления?',
    answer:
      'Нет, профессиональные фотографии не являются обязательным требованием. Наше агентство OnlyFans поможет вам определить оптимальную стратегию контента и подскажет, как создавать качественный материал даже на смартфон. Мы работаем с креаторами на любом этапе — от начинающих до опытных моделей.',
  },
  {
    question: 'Могу ли я оставаться анонимной, работая с вашим агентством?',
    answer:
      'Да, полная анонимность — одна из ключевых опций нашего агентства OnlyFans. Мы предлагаем анонимное управление аккаунтом, включая использование масок, псевдонимов и стратегий защиты личности. Многие наши успешные креаторы работают полностью анонимно и при этом достигают высоких результатов.',
  },
  {
    question: 'Какой процент комиссии берёт агентство?',
    answer:
      'Наша комиссионная структура обсуждается индивидуально и зависит от объёма предоставляемых услуг. Bunny Agency как агентство OnlyFans предлагает конкурентоспособные условия, при которых креаторы всегда зарабатывают значительно больше, чем без управления. Конкретные цифры мы обсудим при подаче заявки.',
  },
  {
    question: 'Как быстро я увижу результаты?',
    answer:
      'Большинство креаторов нашего агентства OnlyFans видят значительный рост дохода в первые 30–60 дней сотрудничества. Точные сроки зависят от вашей текущей аудитории, ниши и типа контента. Наша команда разрабатывает индивидуальную стратегию роста, которая начинает приносить результаты с первых недель работы.',
  },
  {
    question: 'Работаете ли вы с мужчинами-креаторами?',
    answer:
      'Да, наше агентство OnlyFans работает с креаторами любого пола. Мы имеем успешный опыт управления аккаунтами мужчин-креаторов в различных нишах — от фитнеса и лайфстайла до эксклюзивного контента. Стратегии роста адаптируются под вашу целевую аудиторию.',
  },
  {
    question: 'Чем Bunny Agency отличается от других агентств OnlyFans?',
    answer:
      'Bunny Agency — это агентство OnlyFans с проверенным опытом: более 500 креаторов под управлением, свыше $50 миллионов заработанных для наших моделей. Мы предлагаем полный спектр услуг: 24/7 чатинг, мультиплатформенный маркетинг, DMCA защиту и индивидуальную стратегию роста. Наши креаторы в среднем входят в топ 0.1%.',
  },
  {
    question: 'Стоит ли обращаться в агентство OnlyFans для управления?',
    answer:
      'Однозначно да, если вы хотите масштабировать доход и сэкономить время. Агентство OnlyFans берёт на себя все операционные задачи: чатинг, маркетинг, оптимизацию цен и защиту контента. Это позволяет вам сосредоточиться на создании контента, пока профессионалы занимаются ростом вашего бизнеса.',
  },
  {
    question: 'Как подать заявку в Bunny Agency?',
    answer:
      'Подать заявку в наше агентство OnlyFans очень просто — заполните короткую форму на нашем сайте, это займёт не более 2 минут. После получения заявки наша команда свяжется с вами в течение 24 часов для обсуждения условий сотрудничества и стратегии роста. Никакого резюме или портфолио не требуется.',
  },
];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bunny Agency',
    url: 'https://bunny-agency.ru',
    logo: 'https://bunny-agency.ru/favicon.ico',
    description: 'Bunny Agency — ведущее агентство OnlyFans, помогающее креаторам масштабировать доход.',
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

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bunny Agency Russia',
    url: 'https://bunny-agency.ru',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bunny-agency.ru/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'OnlyFans Management Agency',
    provider: {
      '@type': 'Organization',
      name: 'Bunny Agency',
    },
    description: 'Полное управление аккаунтом OnlyFans: менеджмент, маркетинг, чатинг 24/7 и DMCA защита.',
    areaServed: 'Worldwide',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                #1 Агентство OnlyFans —{' '}
                <span className="text-accent">
                  Масштабируйте доход до 6 цифр
                </span>
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                Наше агентство OnlyFans помогает креаторам войти в топ 0.1%
                благодаря экспертному управлению, вирусному маркетингу и
                круглосуточной команде чатинга.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 text-center"
                >
                  Подать заявку
                </Link>
                <a
                  href="#results"
                  className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
                >
                  Наши результаты ↓
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp"
                alt="Агентство OnlyFans — премиальное управление и рост для креаторов"
                width={2048}
                height={1117}
                priority
                className="rounded-2xl shadow-2xl shadow-accent/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR / SOCIAL PROOF ===== */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-center text-text-secondary text-sm uppercase tracking-widest mb-10">
              О нас писали
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 opacity-50">
              {['Forbes', 'Daily Mail', 'NY Post', 'Business Insider', 'Cosmopolitan'].map(
                (name) => (
                  <span
                    key={name}
                    className="text-text-secondary font-bold text-lg sm:text-xl tracking-wide"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </ScrollAnimation>
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* ===== RESULTS / INCOME PROOF ===== */}
      <section id="results" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Доказанные результаты нашего{' '}
                <span className="text-accent">агентства OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Наше агентство OnlyFans помогло сотням креаторов достичь
                стабильного высокого дохода. Ознакомьтесь с реальными
                результатами наших моделей.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="mb-16 flex justify-center">
              <Image
                src="https://bunny-agency.com/wp-content/uploads/2026/01/Review-Statistics.png.webp"
                alt="Агентство OnlyFans — результаты: доходы и отзывы креаторов"
                width={1200}
                height={600}
                className="rounded-2xl shadow-2xl shadow-accent/10 max-w-full h-auto"
              />
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={400}>
            <p className="text-center text-text-secondary mt-12 max-w-2xl mx-auto">
              Это лишь несколько примеров того, как агентство OnlyFans Bunny
              Agency трансформирует карьеры креаторов. Наша команда экспертов
              разрабатывает индивидуальные стратегии для максимального роста
              дохода каждого креатора.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== PAIN vs. GAIN ===== */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Почему креаторы выбирают наше{' '}
                <span className="text-accent">
                  агентство по управлению OnlyFans
                </span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-background border border-danger/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-danger mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Без агентства OnlyFans
                </h3>
                <ul className="space-y-4">
                  {[
                    'Выгорание от круглосуточного чатинга',
                    'Нестабильный и непредсказуемый доход',
                    'Отсутствие маркетинговой стратегии',
                    'Потеря подписчиков без удержания',
                    'Уязвимость перед утечками контента',
                    'Полное управление в одиночку',
                  ].map((pain, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-background border border-success/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-success mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  С Bunny Agency
                </h3>
                <ul className="space-y-4">
                  {[
                    'Выделенная команда чатинга 24/7',
                    'Стабильный доход от $10,000+/мес',
                    'Вирусный маркетинг на всех платформах',
                    'Удержание и рост базы подписчиков',
                    'Полная DMCA защита контента',
                    'Вы занимаетесь только контентом',
                  ].map((gain, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={300}>
            <p className="text-center text-text-secondary max-w-3xl mx-auto">
              Как ведущее агентство OnlyFans, Bunny Agency устраняет все
              препятствия на пути к вашему успеху. Наша профессиональная команда
              берёт на себя операционную нагрузку, позволяя вам сосредоточиться
              на творчестве и создании уникального контента для ваших
              подписчиков.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Услуги нашего{' '}
                <span className="text-accent">агентства OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Полный спектр услуг для креаторов OnlyFans: от управления
                аккаунтом до защиты контента.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 gap-8">
            <ScrollAnimation>
              <ServiceCard
                icon={<Settings className="w-10 h-10" />}
                title="Полное управление аккаунтом OnlyFans"
                description="Наше агентство OnlyFans берёт на себя ежедневные публикации, планирование контента, стратегию PPV-сообщений и оптимизацию ценообразования. Мы управляем каждым аспектом вашего аккаунта для максимального дохода. Профессиональный менеджмент OnlyFans от экспертов с многолетним опытом."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <ServiceCard
                icon={<TrendingUp className="w-10 h-10" />}
                title="Маркетинг и вирусный рост OnlyFans"
                description="Мультиплатформенное продвижение OnlyFans: TikTok, Instagram Reels, Reddit, Twitter/X. Мы создаём вирусные воронки привлечения подписчиков и реализуем стратегии кросс-платформенного маркетинга для максимального органического роста вашей аудитории."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <ServiceCard
                icon={<MessageCircle className="w-10 h-10" />}
                title="Профессиональные чаттеры OnlyFans"
                description="Выделенная команда чаттеров OnlyFans работает круглосуточно для максимизации продаж PPV, повышения вовлечённости подписчиков и персонализированного общения. Наймите профессиональных чаттеров OnlyFans и увеличьте доход от чата в 3–5 раз."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <ServiceCard
                icon={<Shield className="w-10 h-10" />}
                title="DMCA защита и безопасность контента"
                description="Мониторинг утечек контента, оперативные DMCA-заявки на удаление, опции анонимного управления аккаунтом. Наше агентство OnlyFans обеспечивает полную защиту вашего контента и конфиденциальности, включая аудит безопасности OnlyFans."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Самостоятельно vs. наше{' '}
                <span className="text-accent">агентство OnlyFans</span>
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="bg-background border border-white/10 rounded-2xl p-6 sm:p-8">
              <ComparisonTable rows={comparisonRows} />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Как работает наше{' '}
                <span className="text-accent">агентство OnlyFans</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: <Send className="w-8 h-8" />,
                title: 'Подайте заявку',
                description:
                  'Заполните нашу короткую анкету — это займёт всего 2 минуты. Никакого резюме не требуется.',
              },
              {
                step: '02',
                icon: <Target className="w-8 h-8" />,
                title: 'Онбординг',
                description:
                  'Мы проведём аудит вашего аккаунта и разработаем индивидуальную стратегию роста.',
              },
              {
                step: '03',
                icon: <Rocket className="w-8 h-8" />,
                title: 'Рост',
                description:
                  'Расслабьтесь, пока наша команда масштабирует ваш доход. Вы занимаетесь только контентом.',
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="bg-surface border border-white/10 rounded-2xl p-8 text-center relative">
                  <div className="absolute top-4 right-4 text-accent/20 text-6xl font-extrabold">
                    {item.step}
                  </div>
                  <div className="text-accent mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section id="apply" className="py-20 sm:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Подайте заявку в лучшее{' '}
                <span className="text-accent">агентство OnlyFans</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Присоединяйтесь к 500+ креаторам, которые уже зарабатывают
                больше. Быстрая заявка — резюме не требуется.
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

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                Часто задаваемые вопросы о нашем{' '}
                <span className="text-accent">агентстве OnlyFans</span>
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <FAQAccordion items={faqItems} />
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 sm:py-28 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                  Готовы масштабировать свой{' '}
                  <span className="text-accent">доход на OnlyFans?</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Bunny Agency — ведущее агентство OnlyFans, которое помогает
                  креаторам достигать шестизначного дохода. Подайте заявку
                  сегодня и начните свой путь к финансовой свободе с нашей
                  профессиональной командой.
                </p>
                <Link
                  href="#apply"
                  className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                >
                  Подать заявку сейчас
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <Image
                src="https://drive.google.com/uc?export=view&id=14AGcYsRR36jDT9tEOt9qa-kfpmB_C71K"
                alt="Агентство OnlyFans — присоединяйтесь к лучшей команде управления OnlyFans"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl shadow-accent/10"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
