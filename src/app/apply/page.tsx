import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import HubSpotForm from '@/components/HubSpotForm';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Users, TrendingUp, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Подать заявку в лучшее агентство OnlyFans | Bunny Agency',
  description:
    'Подайте заявку в Bunny Agency — лучшее агентство OnlyFans. Быстрая анкета за 2 минуты. Присоединяйтесь к 500+ успешным креаторам.',
  alternates: {
    canonical: 'https://bunny-agency.ru/apply',
  },
  openGraph: {
    title: 'Подать заявку в лучшее агентство OnlyFans | Bunny Agency',
    description:
      'Подайте заявку в Bunny Agency — лучшее агентство OnlyFans. Быстрая анкета за 2 минуты.',
    url: 'https://bunny-agency.ru/apply',
    images: [
      {
        url: 'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
        width: 2048,
        height: 1117,
        alt: 'Агентство OnlyFans — подайте заявку в Bunny Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Подать заявку в лучшее агентство OnlyFans | Bunny Agency',
    description:
      'Подайте заявку в Bunny Agency — лучшее агентство OnlyFans. Быстрая анкета за 2 минуты.',
  },
};

export default function ApplyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Подать заявку' },
          ]}
        />

        <section className="py-12 sm:py-20">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Подайте заявку в лучшее{' '}
                <span className="text-accent">агентство OnlyFans</span>
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Присоединяйтесь к 500+ креаторам, которые уже масштабируют свой
                доход с Bunny Agency. Заполните короткую анкету — это займёт
                всего 2 минуты. Никакого резюме или портфолио не требуется.
                Наше агентство OnlyFans свяжется с вами в течение 24 часов.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="bg-surface border border-white/10 rounded-2xl p-8 sm:p-12 mb-16">
              <HubSpotForm />
            </div>
          </ScrollAnimation>

          {/* Trust Signals */}
          <ScrollAnimation delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  value: '500+',
                  label: 'Креаторов',
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  value: '$50M+',
                  label: 'Заработано',
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  value: 'Топ 0.1%',
                  label: 'Рейтинг',
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  value: '24/7',
                  label: 'Поддержка',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-surface border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-accent mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-extrabold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Testimonial Snippet */}
          <ScrollAnimation delay={400}>
            <div className="bg-surface border border-white/10 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-text-secondary italic text-lg mb-4 max-w-xl mx-auto">
                &ldquo;Bunny Agency — лучшее агентство OnlyFans, с которым я
                работала. За 3 месяца мой доход вырос в 10 раз. Полностью
                рекомендую!&rdquo;
              </p>
              <p className="text-white font-bold">Алина К.</p>
              <p className="text-text-secondary text-sm">
                Фитнес и лайфстайл креатор
              </p>
            </div>
          </ScrollAnimation>
        </section>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
