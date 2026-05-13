export default function CookiePage() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">

        <header className="mb-10 border-b border-stone-200 pb-8 text-center">

            <a
              href="/"
              className="w-[300px] mb-[50px] flex-1 flex items-center justify-center gap-3 px-6 py-3.5 bg-[#f3f3f3] rounded-full [font-family:'Manrope',Helvetica] font-medium text-[#202020] text-[15px]"
              style={{ cursor: 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }} width="17" height="17" viewBox="0 0 19 18" fill="none"><path d="M8.98522 0.5L17.4704 8.9853M17.4704 8.9853L8.98522 17.4706M17.4704 8.9853L0.5 8.9853" stroke="black" stroke-linecap="round"></path></svg>
              Перейти на основную
            </a>



          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-stone-400">
            ИП Уварова Надежда Игоревна
          </p>

          <h1 className="mb-3 text-2xl font-semibold tracking-tight text-stone-800 sm:text-3xl">
            Политика использования файлов cookie
          </h1>

          <p className="text-sm text-stone-400">
            Дата последнего обновления: 03.07.2025
          </p>
        </header>

        <div className="mb-10 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-sm leading-relaxed text-stone-600">
            Продолжая использовать данный веб-сайт без изменения настроек
            браузера, вы выражаете согласие на использование cookie-файлов в
            соответствии с настоящей Политикой. Если вы не согласны —
            измените настройки браузера или прекратите использование сайта.
            Интернет снова требует согласия на невидимые файлы. Цифровая
            бюрократия, но эстетичная.
          </p>
        </div>

        <Section title="1. Что такое cookie">
          <p>
            Cookie — это небольшие текстовые файлы, которые сохраняются на
            вашем устройстве при посещении сайта. Они позволяют распознавать
            вас при повторных визитах, сохранять настройки и обеспечивать
            работу определённых функций сайта.
          </p>

          <p>
            Мы не используем cookie для хранения персональных данных без
            вашего согласия.
          </p>

          <div className="rounded-xl bg-stone-100 px-4 py-4">
            <p className="mb-3 font-medium text-stone-700">
              Типы cookie-файлов:
            </p>

            <ul className="space-y-2 text-sm text-stone-600">
              <li>• Сеансовые — удаляются после закрытия браузера;</li>

              <li>
                • Постоянные — хранятся на устройстве до установленного срока
                истечения;
              </li>

              <li>
                • Сторонние — устанавливаются внешними сервисами и платформами.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="2. Цели использования файлов cookie">
          <CookieBlock
            title="Обязательные (критически важные)"
            text="Необходимы для корректной работы сайта:"
            items={[
              "Хранение содержимого корзины;",
              "Поддержка сессии и авторизации;",
              "Сохранение данных, введённых в формах, в течение одного сеанса.",
            ]}
          />

          <CookieBlock
            title="Функциональные"
            text="Улучшают пользовательский опыт:"
            items={[
              "Запоминают выбранный язык, регион и другие настройки;",
              "Хранят информацию об уже предложенных функциях (например, онлайн-чат).",
            ]}
          />

          <CookieBlock
            title="Аналитические"
            text="Используются для сбора статистических данных и оптимизации сайта:"
            items={[
              "Google Analytics, Яндекс.Метрика, Appsflyer и другие сервисы;",
              "Анализ пользовательских действий;",
              "Подсчёт ошибок и улучшение производительности сайта.",
            ]}
          />

          <CookieBlock
            title="Рекламные и ссылочные"
            text="Позволяют оценивать эффективность рекламных кампаний и переходов с внешних источников."
          />
        </Section>

        <Section title="3. Сторонние cookie">
          <p>
            Некоторые cookie-файлы могут быть установлены сторонними сервисами
            (например, Google, Яндекс, VK, YouTube). Мы не управляем их
            использованием и не контролируем содержание таких cookie.
          </p>

          <p>
            Рекомендуем ознакомиться с политиками конфиденциальности
            соответствующих сервисов. Каждый сервис считает своим долгом
            отслеживать человечество ради «улучшения пользовательского опыта».
            Трогательная корпоративная забота.
          </p>

          <p>
            Вы можете отказаться от использования сторонних cookie, изменив
            настройки в браузере или воспользовавшись инструментами настройки
            на сайтах соответствующих сервисов.
          </p>
        </Section>

        <Section title="4. Управление cookie">
          <p>
            Вы можете настроить браузер для блокировки или удаления
            cookie-файлов. Обратите внимание, что отключение cookie может
            повлиять на корректную работу некоторых функций сайта.
          </p>

          <p>
            Если вы используете несколько устройств, настройки необходимо
            изменять отдельно для каждого устройства и браузера. Потому что
            технологии не ищут лёгких путей.
          </p>
        </Section>

        <Section title="5. Веб-маяки и подобные технологии">
          <p>
            На сайте и в электронных рассылках мы можем использовать
            веб-маяки (однопиксельные изображения), которые позволяют
            отслеживать взаимодействие с контентом.
          </p>

          <p>
            Они работают совместно с cookie и могут быть отключены при
            деактивации cookie или блокировке загрузки изображений в
            настройках браузера или почтовой программы.
          </p>
        </Section>

        <Section title="6. Обновление политики">
          <p>
            Актуальная версия настоящей Политики размещена по адресу:
          </p>

          <a
            href="https://uristgovorit.ru/cookie"
            className="inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
          >
            uristgovorit.ru/cookie
          </a>

          <p>
            Мы оставляем за собой право вносить изменения в настоящую
            Политику без предварительного уведомления. Обновлённая редакция
            вступает в силу с момента её публикации.
          </p>
        </Section>

        <footer className="pt-4 text-center text-xs text-stone-400">
          © 2025 ИП Уварова Надежда Игоревна
        </footer>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 border-b border-stone-200 pb-8 last:mb-0 last:border-0">
      <h2 className="mb-4 text-base font-semibold text-stone-800">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-stone-600">
        {children}
      </div>
    </section>
  );
}

function CookieBlock({
  title,
  text,
  items,
}: {
  title: string;
  text: string;
  items?: string[];
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p className="mb-2 font-medium text-stone-700">
        {title}
      </p>

      <p className="mb-3 text-sm text-stone-600">
        {text}
      </p>

      {items?.length ? (
        <ul className="space-y-2 text-sm text-stone-600">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}