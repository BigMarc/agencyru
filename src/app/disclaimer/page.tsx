import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Отказ от ответственности | Bunny Agency',
  description:
    'Отказ от ответственности Bunny Agency LLC. Информация о гарантиях, товарных знаках и ограничениях ответственности.',
  alternates: {
    canonical: 'https://bunny-agency.ru/disclaimer',
  },
  openGraph: {
    title: 'Отказ от ответственности | Bunny Agency',
    description:
      'Отказ от ответственности Bunny Agency LLC. Информация о гарантиях и ограничениях.',
    url: 'https://bunny-agency.ru/disclaimer',
  },
  twitter: {
    card: 'summary',
    title: 'Отказ от ответственности | Bunny Agency',
    description:
      'Отказ от ответственности Bunny Agency LLC.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Отказ от ответственности' },
          ]}
        />

        <article className="py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Отказ от ответственности
          </h1>
          <p className="text-text-secondary mb-12">
            Последнее обновление: январь 2025 г.
          </p>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Earnings Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Отказ от гарантий дохода
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bunny Agency LLC не гарантирует конкретных финансовых
                результатов. Все примеры доходов, финансовые показатели и
                статистика, представленные на данном сайте, являются
                иллюстративными и отражают результаты отдельных креаторов.
                Индивидуальные результаты могут существенно различаться в
                зависимости от множества факторов, включая, но не ограничиваясь:
                нишу, качество контента, частоту публикаций, существующую
                аудиторию, уровень вовлечённости и рыночные условия.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Отзывы и кейсы, представленные на сайте, являются
                репрезентативными примерами, но не являются гарантией аналогичных
                результатов для каждого креатора. Прошлые результаты не
                гарантируют будущих достижений. Использование наших услуг не
                является гарантией получения дохода определённого уровня.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Мы прилагаем все усилия для максимизации дохода наших креаторов,
                однако успех зависит от совместной работы и множества внешних
                факторов, которые находятся за пределами нашего контроля.
              </p>
            </section>

            {/* Not Financial Advice */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Не является финансовой консультацией
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Информация, представленная на данном сайте, не является
                финансовой, инвестиционной или налоговой консультацией. Контент
                носит исключительно информационный и образовательный характер.
                Bunny Agency LLC не является финансовым консультантом,
                инвестиционным советником или налоговым специалистом. Мы
                настоятельно рекомендуем консультироваться с квалифицированными
                финансовыми и налоговыми специалистами относительно ваших
                индивидуальных обстоятельств, особенно в вопросах
                налогообложения доходов от деятельности на OnlyFans.
              </p>
            </section>

            {/* Not Legal Advice */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Не является юридической консультацией
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Содержание данного сайта, включая условия использования,
                политику конфиденциальности и другие правовые документы, не
                является юридической консультацией. Информация предоставляется
                исключительно в ознакомительных целях. Для получения
                юридических рекомендаций, касающихся вашей деятельности на
                платформе OnlyFans, защиты контента, авторских прав или других
                правовых вопросов, обращайтесь к квалифицированному юристу в
                вашей юрисдикции.
              </p>
            </section>

            {/* Trademark Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Товарные знаки
              </h2>
              <p className="text-text-secondary leading-relaxed">
                &ldquo;OnlyFans&rdquo; является зарегистрированным товарным
                знаком компании Fenix International Limited. Bunny Agency LLC
                является независимым агентством по управлению и не
                аффилировано, не одобрено и не спонсировано компанией OnlyFans
                или Fenix International Limited. Все упоминания товарного знака
                OnlyFans на данном сайте используются исключительно в
                описательных целях для идентификации платформы, на которой мы
                оказываем управленческие услуги. Все другие упомянутые товарные
                знаки и торговые марки принадлежат их соответствующим владельцам.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Внешние ссылки
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Наш сайт может содержать ссылки на веб-сайты и ресурсы третьих
                сторон. Эти ссылки предоставляются исключительно для удобства
                пользователей. Bunny Agency LLC не контролирует содержание
                внешних ресурсов и не несёт ответственности за их содержание,
                точность, политику конфиденциальности или практики. Переход по
                внешним ссылкам осуществляется на ваш собственный риск. Мы
                рекомендуем ознакомиться с условиями и политикой
                конфиденциальности каждого стороннего сайта, который вы
                посещаете.
              </p>
            </section>

            {/* Accuracy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Точность информации
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Мы прилагаем все разумные усилия для обеспечения точности и
                актуальности информации, представленной на данном сайте. Однако
                мы не гарантируем, что весь контент является абсолютно точным,
                полным или актуальным на момент его просмотра. Информация на
                сайте может содержать технические неточности или
                типографические ошибки. Bunny Agency LLC оставляет за собой
                право вносить изменения и обновления в содержание сайта без
                предварительного уведомления. Мы не несём ответственности за
                решения, принятые на основании информации, представленной на
                данном сайте.
              </p>
            </section>

            {/* Age Requirement */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Возрастные ограничения
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Услуги Bunny Agency LLC предназначены исключительно для лиц,
                достигших 18 лет. Используя наш сайт и подавая заявку на
                сотрудничество, вы подтверждаете, что достигли совершеннолетия
                в вашей юрисдикции. Мы не оказываем услуги лицам моложе 18 лет
                и не несём ответственности за использование нашего сайта
                несовершеннолетними лицами.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Контактная информация
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Если у вас есть вопросы относительно данного отказа от
                ответственности, свяжитесь с нами:
              </p>
              <div className="bg-surface border border-white/10 rounded-xl p-6">
                <p className="text-white font-semibold mb-2">
                  Bunny Agency LLC
                </p>
                <p className="text-text-secondary">
                  1309 Coffeen Avenue STE 1200
                  <br />
                  Sheridan, Wyoming, 82801
                  <br />
                  United States
                </p>
                <p className="text-text-secondary mt-2">
                  Email: contact@bunny-agency.ru
                </p>
              </div>
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
