export default function CookiePage() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">

        <header className="mb-10 pb-8 border-b border-stone-200 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">
            ИП Уварова Надежда Игоревна
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-2">
            Политика использования файлов cookie
          </h1>
          <p className="text-sm text-stone-400">Дата последнего обновления: 03.07.2025</p>
        </header>

        <p className="text-sm text-stone-600 leading-relaxed bg-stone-100 border-l-2 border-stone-400 rounded-r px-4 py-3 mb-10">
          Продолжая использовать данный веб-сайт без изменения настроек браузера, вы выражаете
          согласие на использование cookie-файлов в соответствии с настоящей Политикой. Если вы
          не согласны — измените настройки браузера или прекратите использование сайта.
        </p>

        <Section title="1. Что такое cookie">
          <p>
            Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при
            посещении сайта. Они позволяют распознавать вас при повторных визитах, сохранять
            настройки и обеспечивать работу определённых функций сайта.
          </p>
          <p>Мы не используем cookie для хранения персональных данных без вашего согласия.</p>
          <p className="font-medium text-stone-700">Типы cookie-файлов:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
            <li>Сеансовые — удаляются после закрытия браузера;</li>
            <li>Постоянные — хранятся на устройстве до установленного срока истечения;</li>
            <li>Сторонние — устанавливаются внешними сервисами и платформами.</li>
          </ul>
        </Section>

        <Section title="2. Цели использования файлов cookie">
          <p className="font-medium text-stone-700">Обязательные (критически важные)</p>
          <p>Необходимы для корректной работы сайта:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
            <li>Хранение содержимого корзины;</li>
            <li>Поддержка сессии и авторизации;</li>
            <li>Сохранение данных, введённых в формах, в течение одного сеанса.</li>
          </ul>

          <p className="font-medium text-stone-700 mt-4">Функциональные</p>
          <p>Улучшают пользовательский опыт:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
            <li>Запоминают выбранный язык, регион, другие настройки;</li>
            <li>Хранят информацию об уже предложенных функциях (например, онлайн-чат).</li>
          </ul>

          <p className="font-medium text-stone-700 mt-4">Аналитические</p>
          <p>Используются для сбора статистических данных и оптимизации сайта:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
            <li>Google Analytics, Яндекс.Метрика, Appsflyer и др.;</li>
            <li>Анализ пользовательских действий;</li>
            <li>Подсчёт ошибок, улучшение производительности сайта и интерфейса.</li>
          </ul>

          <p className="font-medium text-stone-700 mt-4">Рекламные и ссылочные</p>
          <p>
            Позволяют оценивать эффективность рекламных кампаний и переходов с внешних
            источников (например, с сайтов партнёров или баннеров).
          </p>
        </Section>

        <Section title="3. Сторонние cookie">
          <p>
            Некоторые cookie-файлы могут быть установлены сторонними сервисами (например,
            Google, Яндекс, VK, YouTube). Мы не управляем их использованием и не контролируем
            содержание таких cookie. Рекомендуем ознакомиться с политиками конфиденциальности
            этих сервисов.
          </p>
          <p>
            Вы можете отказаться от использования сторонних cookie, изменив настройки в вашем
            браузере или воспользовавшись инструментами настройки на сайтах соответствующих
            сервисов.
          </p>
        </Section>

        <Section title="4. Управление cookie">
          <p>
            Вы можете настроить браузер для блокировки или удаления cookie-файлов. Обратите
            внимание, что отключение cookie может повлиять на корректную работу некоторых
            функций сайта.
          </p>
          <p>
            Если вы используете несколько устройств (например, смартфон и компьютер), настройки
            необходимо изменять отдельно для каждого устройства и браузера.
          </p>
        </Section>

        <Section title="5. Веб-маяки и подобные технологии">
          <p>
            На сайте и в электронных рассылках мы можем использовать веб-маяки (однопиксельные
            изображения), которые позволяют отслеживать взаимодействие с контентом. Они работают
            совместно с cookie и могут быть отключены при деактивации cookie или при блокировке
            загрузки изображений в настройках почтовой программы или браузера.
          </p>
        </Section>

        <Section title="6. Обновление политики">
          <p>
            Актуальная версия настоящей Политики размещена по адресу:{" "}
            <a
              href="https://uristgovorit.ru/cookie"
              className="text-stone-700 underline underline-offset-2 hover:text-stone-900"
            >
              https://uristgovorit.ru/cookie
            </a>
            . Мы оставляем за собой право вносить в неё изменения в любое время без
            предварительного уведомления. Обновлённая редакция вступает в силу с момента её
            публикации по указанному адресу.
          </p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 pb-8 border-b border-stone-200 last:border-0 last:mb-0">
      <h2 className="text-base font-semibold text-stone-800 mb-3">{title}</h2>
      <div className="space-y-2 text-sm text-stone-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
