import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Политика cookies | Bunny Agency',
  description:
    'Политика использования файлов cookies на сайте Bunny Agency. Узнайте, какие cookies мы используем и как управлять ими.',
  alternates: {
    canonical: 'https://bunny-agency.ru/cookie-policy',
  },
  openGraph: {
    title: 'Политика cookies | Bunny Agency',
    description:
      'Политика использования файлов cookies на сайте Bunny Agency.',
    url: 'https://bunny-agency.ru/cookie-policy',
  },
  twitter: {
    card: 'summary',
    title: 'Политика cookies | Bunny Agency',
    description:
      'Политика использования файлов cookies на сайте Bunny Agency.',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Политика cookies' },
          ]}
        />

        <article className="py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Политика cookies
          </h1>
          <p className="text-text-secondary mb-12">
            Последнее обновление: январь 2025 г.
          </p>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Что такое файлы cookies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Файлы cookies — это небольшие текстовые файлы, которые
                сохраняются на вашем устройстве (компьютере, планшете или
                смартфоне) при посещении нашего сайта. Они широко используются
                для обеспечения корректной работы веб-сайтов, повышения
                эффективности их работы, а также для предоставления информации
                владельцам сайта.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Cookies позволяют нашему сайту запоминать ваши действия и
                настройки (например, язык, размер шрифта и другие параметры
                отображения), чтобы вам не приходилось вводить их повторно при
                каждом посещении или переходе между страницами. Bunny Agency
                использует файлы cookies для улучшения вашего пользовательского
                опыта и аналитики посещаемости.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Типы используемых cookies
              </h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                2.1 Строго необходимые cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Эти файлы cookies необходимы для функционирования нашего сайта и
                не могут быть отключены в наших системах. Они обычно
                устанавливаются в ответ на ваши действия, связанные с запросом
                услуг, такие как настройка параметров конфиденциальности, вход в
                систему или заполнение форм. Эти cookies не хранят
                персональные данные, которые можно использовать для
                идентификации личности. Без этих cookies сайт не может
                функционировать корректно.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                2.2 Аналитические cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Мы используем аналитические cookies для понимания того, как
                посетители взаимодействуют с нашим сайтом. Это включает сбор
                информации о количестве посетителей, источниках трафика,
                посещённых страницах и времени, проведённом на сайте. Мы
                используем следующие аналитические инструменты:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  <strong className="text-white">Google Analytics</strong> —
                  сервис веб-аналитики Google, который отслеживает и
                  предоставляет отчёты о трафике сайта. Google может использовать
                  собранные данные для контекстуализации и персонализации
                  рекламы. Подробнее:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Политика конфиденциальности Google
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-white">Vercel Analytics</strong> —
                  встроенная аналитика нашей хостинг-платформы Vercel, которая
                  собирает анонимизированные данные о производительности сайта и
                  паттернах использования.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                2.3 Маркетинговые cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Маркетинговые cookies используются для отслеживания посетителей
                на веб-сайтах. Мы используем следующие маркетинговые cookies:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  <strong className="text-white">
                    HubSpot tracking cookies
                  </strong>{' '}
                  — устанавливаются при отправке формы заявки и используются для
                  управления лидами в нашей CRM-системе HubSpot. Эти cookies
                  помогают нам отслеживать взаимодействие с формами и
                  оптимизировать процесс обработки заявок. Cookies HubSpot могут
                  сохраняться до 13 месяцев.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                2.4 Cookies третьих сторон
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Некоторые cookies на нашем сайте устанавливаются третьими
                сторонами. Это может происходить при встраивании внешнего
                контента (видео, виджеты социальных сетей и другие
                интерактивные элементы). Мы не контролируем cookies, которые
                устанавливаются третьими сторонами, и рекомендуем ознакомиться
                с их политиками конфиденциальности для получения дополнительной
                информации.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Управление файлами cookies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Вы можете управлять файлами cookies и удалять их через настройки
                вашего браузера. Ниже приведены инструкции для основных
                браузеров:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  <strong className="text-white">Google Chrome:</strong>{' '}
                  Настройки → Конфиденциальность и безопасность → Файлы
                  cookies и другие данные сайтов
                </li>
                <li>
                  <strong className="text-white">Mozilla Firefox:</strong>{' '}
                  Настройки → Приватность и защита → Cookies и данные сайтов
                </li>
                <li>
                  <strong className="text-white">Safari:</strong> Настройки →
                  Конфиденциальность → Управление данными веб-сайтов
                </li>
                <li>
                  <strong className="text-white">Microsoft Edge:</strong>{' '}
                  Настройки → Cookies и разрешения сайтов → Управление и
                  удаление файлов cookies
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                Обратите внимание, что отключение cookies может повлиять на
                функциональность нашего сайта. Некоторые функции могут работать
                некорректно или стать недоступными без использования файлов
                cookies. Строго необходимые cookies нельзя отключить, так как
                они необходимы для работы сайта.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Согласие на использование cookies
              </h2>
              <p className="text-text-secondary leading-relaxed">
                При первом посещении нашего сайта вам может быть предложено дать
                согласие на использование cookies. Вы можете принять все cookies,
                отклонить необязательные или настроить свои предпочтения.
                Продолжая использовать наш сайт после получения уведомления о
                cookies, вы соглашаетесь с использованием cookies в соответствии
                с данной политикой. Вы можете изменить свои предпочтения в любое
                время через настройки браузера.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Влияние отключения cookies
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Если вы решите отключить или заблокировать определённые типы
                cookies, это может повлиять на ваш опыт использования нашего
                сайта следующим образом: формы обратной связи могут работать
                некорректно, мы не сможем анализировать посещаемость и улучшать
                сайт, персонализация контента может быть ограничена. Строго
                необходимые cookies не могут быть отключены, так как без них сайт
                не сможет функционировать.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Изменения в политике cookies
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Мы оставляем за собой право обновлять настоящую политику cookies
                в любое время. Все изменения вступают в силу с момента их
                публикации на данной странице. Мы рекомендуем периодически
                проверять эту страницу для ознакомления с актуальной версией
                политики. Дата последнего обновления указана в начале документа.
                Продолжение использования сайта после внесения изменений
                означает ваше согласие с обновлённой политикой cookies.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Контактная информация
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Если у вас есть вопросы относительно нашей политики cookies или
                использования файлов cookies на нашем сайте, свяжитесь с нами:
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
