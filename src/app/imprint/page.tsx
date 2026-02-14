import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Импрессум — Юридическая информация | Bunny Agency',
  description:
    'Импрессум и юридическая информация Bunny Agency LLC. Контактные данные и информация о компании.',
  alternates: {
    canonical: 'https://bunny-agency.ru/imprint',
  },
  openGraph: {
    title: 'Импрессум — Юридическая информация | Bunny Agency',
    description:
      'Импрессум и юридическая информация Bunny Agency LLC.',
    url: 'https://bunny-agency.ru/imprint',
  },
  twitter: {
    card: 'summary',
    title: 'Импрессум — Юридическая информация | Bunny Agency',
    description:
      'Импрессум и юридическая информация Bunny Agency LLC.',
  },
};

export default function ImprintPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Импрессум' },
          ]}
        />

        <article className="py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Импрессум
          </h1>
          <p className="text-text-secondary mb-12">
            Юридическая информация в соответствии с требованиями законодательства
          </p>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Company Info */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Информация о компании
              </h2>
              <div className="bg-surface border border-white/10 rounded-xl p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-text-secondary text-sm uppercase tracking-wider mb-1">
                      Полное наименование юридического лица
                    </p>
                    <p className="text-white text-lg font-semibold">
                      Bunny Agency LLC
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm uppercase tracking-wider mb-1">
                      Юридическая форма
                    </p>
                    <p className="text-white">
                      Limited Liability Company (LLC) — Общество с ограниченной
                      ответственностью, зарегистрированное в штате Вайоминг, США
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm uppercase tracking-wider mb-1">
                      Адрес
                    </p>
                    <p className="text-white">
                      1309 Coffeen Avenue STE 1200
                      <br />
                      Sheridan, Wyoming, 82801
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm uppercase tracking-wider mb-1">
                      Контактный email
                    </p>
                    <p className="text-white">contact@bunny-agency.ru</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsible for Content */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ответственность за содержание
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ответственным за содержание сайта в соответствии с § 5 TMG
                (Telemediengesetz — Закон Германии о телемедиа) и § 55 абз. 2
                RStV (Rundfunkstaatsvertrag — Государственный договор о
                вещании) является:
              </p>
              <div className="bg-surface border border-white/10 rounded-xl p-6">
                <p className="text-white font-semibold">Bunny Agency LLC</p>
                <p className="text-text-secondary">
                  1309 Coffeen Avenue STE 1200
                  <br />
                  Sheridan, Wyoming, 82801
                  <br />
                  United States
                </p>
              </div>
              <p className="text-text-secondary leading-relaxed mt-4">
                Bunny Agency LLC несёт ответственность за собственный контент на
                данном сайте в соответствии с общим законодательством.
                Содержание нашего сайта создано с максимальной тщательностью.
                Однако мы не можем гарантировать абсолютную точность, полноту и
                актуальность всех представленных материалов. Как поставщик услуг,
                мы несём ответственность за собственные материалы в соответствии
                с применимым законодательством.
              </p>
            </section>

            {/* Liability for Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ответственность за ссылки
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Наш сайт может содержать ссылки на внешние веб-сайты третьих
                сторон, на содержание которых мы не имеем влияния. Поэтому мы
                не несём ответственности за содержание этих внешних ресурсов.
                За содержание связанных страниц всегда несёт ответственность
                соответствующий провайдер или оператор этих страниц. Связанные
                страницы были проверены на наличие возможных нарушений
                законодательства на момент установления ссылки. Незаконное
                содержание не было обнаружено на момент создания ссылки.
                Постоянный мониторинг содержания связанных страниц без
                конкретных оснований подозревать нарушение закона не
                представляется возможным. При обнаружении нарушений мы
                незамедлительно удалим такие ссылки.
              </p>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Авторское право
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Содержание и произведения, созданные операторами данного сайта,
                защищены авторским правом. Копирование, обработка,
                распространение и любое использование за пределами авторского
                права требуют письменного согласия соответствующего автора или
                создателя. Скачивание и копирование данного сайта разрешено
                исключительно для частного, некоммерческого использования.
                Использование контента данного сайта в коммерческих целях без
                явного письменного согласия Bunny Agency LLC запрещено. Если
                содержание на этом сайте было создано не оператором, авторские
                права третьих лиц соблюдаются. В случае обнаружения нарушения
                авторских прав просим вас сообщить нам об этом. При
                подтверждении нарушения мы незамедлительно удалим
                соответствующий контент.
              </p>
            </section>

            {/* EU Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Разрешение споров для пользователей из ЕС
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Европейская комиссия предоставляет платформу для онлайн-
                разрешения споров (ODR). Платформа доступна по адресу:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p className="text-text-secondary leading-relaxed">
                Мы не обязаны и не готовы участвовать в процедуре разрешения
                споров перед потребительской арбитражной комиссией. Тем не менее,
                мы стремимся решать все возникающие вопросы и споры путём
                прямого общения с нашими пользователями и клиентами. Если у вас
                есть какие-либо претензии или вопросы, пожалуйста, свяжитесь с
                нами по указанным выше контактным данным.
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Защита данных
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Подробная информация об обработке персональных данных
                представлена в нашей{' '}
                <Link
                  href="/privacy-policy"
                  className="text-accent hover:underline"
                >
                  Политике конфиденциальности
                </Link>
                . Информация об использовании файлов cookies доступна в нашей{' '}
                <Link
                  href="/cookie-policy"
                  className="text-accent hover:underline"
                >
                  Политике cookies
                </Link>
                .
              </p>
            </section>
          </div>

          {/* Back to homepage link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="text-accent hover:underline font-semibold"
            >
              ← Вернуться на главную — агентство OnlyFans Bunny Agency
            </Link>
          </div>
        </article>
      </div>

      <div className="h-16 md:hidden" />
    </div>
  );
}
