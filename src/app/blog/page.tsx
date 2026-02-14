import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Блог Bunny Agency — Советы и руководства по OnlyFans',
  description:
    'Блог Bunny Agency: полезные статьи, советы и руководства по OnlyFans. Узнайте, как увеличить доход и стать успешным креатором.',
  alternates: {
    canonical: 'https://bunny-agency.ru/blog',
  },
  openGraph: {
    title: 'Блог Bunny Agency — Советы и руководства по OnlyFans',
    description:
      'Полезные статьи, советы и руководства по OnlyFans от экспертов Bunny Agency.',
    url: 'https://bunny-agency.ru/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог Bunny Agency — Советы и руководства по OnlyFans',
    description:
      'Полезные статьи, советы и руководства по OnlyFans от экспертов Bunny Agency.',
  },
};

const blogPosts = [
  {
    slug: 'kak-nachat-onlyfans',
    title: 'Как начать OnlyFans в 2025 году: полное руководство',
    excerpt:
      'Пошаговое руководство по созданию успешного аккаунта OnlyFans с нуля. Советы по настройке профиля, ценообразованию и первым подписчикам.',
    category: 'Руководство',
  },
  {
    slug: 'top-10-sovetov-onlyfans',
    title: 'Топ-10 советов OnlyFans для начинающих креаторов',
    excerpt:
      'Практические советы от экспертов агентства OnlyFans, которые помогут начинающим креаторам избежать типичных ошибок и быстрее выйти на доход.',
    category: 'Советы',
  },
  {
    slug: 'agentstvo-onlyfans-uvelichit-dokhod',
    title: 'Как агентство OnlyFans может увеличить ваш доход в 10 раз',
    excerpt:
      'Узнайте, почему профессиональное управление OnlyFans через агентство — ключ к стабильному шестизначному доходу для креаторов.',
    category: 'Аналитика',
  },
  {
    slug: 'marketing-strategiya-onlyfans',
    title: 'Маркетинговая стратегия OnlyFans: полное руководство',
    excerpt:
      'Детальный разбор маркетинговых стратегий для OnlyFans: TikTok, Instagram, Reddit, Twitter и кросс-платформенные воронки привлечения.',
    category: 'Маркетинг',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Блог' },
          ]}
        />

        <section className="py-12 sm:py-20">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Блог Bunny Agency —{' '}
                <span className="text-accent">
                  Советы и руководства по OnlyFans
                </span>
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Экспертные статьи от нашего агентства OnlyFans: стратегии роста,
                маркетинговые советы и руководства для креаторов.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.slug} delay={index * 100}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-surface border border-white/10 rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-300">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-accent font-semibold text-sm inline-flex items-center gap-1">
                      Читать далее
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimation delay={400}>
            <div className="mt-20 text-center bg-surface border border-white/10 rounded-2xl p-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Хотите масштабировать доход на OnlyFans?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Bunny Agency — ведущее агентство OnlyFans. Подайте заявку
                сегодня и начните зарабатывать больше с нашей профессиональной
                командой.
              </p>
              <Link
                href="/apply"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Подать заявку
              </Link>
            </div>
          </ScrollAnimation>
        </section>
      </div>

      <div className="h-16 md:hidden" />
    </div>
  );
}
