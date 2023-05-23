# Въведение

Това хранилище е **трета част** от пъзела, който ви е нужен, за да сглобите проекта.

Приложението, което е поместено в това хранилище, се базира на [Nuxt 3](https://nuxt.com/) и отговаря за извличането на информация от [Laravel приложението](https://github.com/destinationbg/backend-laravel), както и подаването на потребителска информация към него.

---

## Хранилища

1. Част първа - [Статично съдържание](https://github.com/destinationbg/static-contents) за забележителностите
1. Част втора - [Laravel](https://github.com/destinationbg/backend-laravel) за административен панел и REST API
1. Част трета - [Nuxt 3](https://github.com/destinationbg/frontend-nuxt) за публичната част на сайта

## Технологии

| Тип               | Технологии                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server & Building | [Vite](https://npmjs.com/package/vite)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Language          | [TypeScript](https://npmjs.com/package/typescript)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Framework         | [Nuxt 3](https://npmjs.com/package/nuxt)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Plugins           | [i18n](https://npmjs.com/package/@nuxtjs/i18n), [Pinia](https://npmjs.com/package/pinia), [VueUse](https://npmjs.com/package/@vueuse/nuxt), [VeeValidate](https://npmjs.com/package/vee-validate), [Markdown It](https://npmjs.com/package/markdown-it), [NuxtAuth](https://npmjs.com/package/@sidebase/nuxt-auth), [Nuxt Google Tag](https://npmjs.com/package/nuxt-gtag), [Schema.org](https://npmjs.com/package/nuxt-schema-org), [Flaticon UIcons](https://npmjs.com/package/@flaticon/flaticon-uicons) |
| Styles            | [SASS](https://npmjs.com/package/sass), [PostCSS](https://npmjs.com/package/postcss), [Autoprefixer](https://npmjs.com/package/autoprefixer), [Browserslist](https://npmjs.com/package/browserslist)                                                                                                                                                                                                                                                                                                        |
| Linters           | [ESlint](https://npmjs.com/package/eslint), [Prettier](https://npmjs.com/package/prettier), [Stylelint](https://npmjs.com/package/stylelint)                                                                                                                                                                                                                                                                                                                                                                |
| Tests             | [Vitest](https://npmjs.com/package/vitest)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Git Hooks         | [Husky](https://npmjs.com/package/husky), [lint-staged](https://npmjs.com/package/lint-staged)                                                                                                                                                                                                                                                                                                                                                                                                              |

## Инсталация

За да инсталирате приложението, е нужно да свалите и инсталирате [LTS версията на Node.js](https://nodejs.org/en/download), която по време на създаването на това хранилище е била **18.16.0**. За различните Node.js пакети понякога е нужно да сменим версията на самия Node.js, затова препоръчваме да свалите също [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm), за да можете лесно да сменяте версиите му, докато разработвате.

След това свалете Nuxt приложението в папка `destinationbg-nuxt` (или по Ваш избор) на локалната Ви машина и инсталирайте нужните за него Node.js пакети, описани в `package.json` файла.

```bash
git clone git@github.com:destinationbg/frontend-nuxt.git destinationbg-nuxt
cd destinationbg-nuxt
npm install
```

Създайте нов файл от `.env.local`, който кръстете `.env` и го отворете, за да попълните празните променливи, описани по-долу.

```bash
cp .env.local .env
```

<details>
<summary>Попълване на "FACEBOOK_CLIENT_ID" и "FACEBOOK_CLIENT_SECRET"</summary>

Създайте собствено приложение в [сайта на Facebook за разработчици](https://developers.facebook.com/apps/). Отворете го и идете на **Settings** > **Basic**, от където трябва да вземете **App ID** за `FACEBOOK_CLIENT_ID` и **App secret** за `FACEBOOK_CLIENT_SECRET`.

</details>

<details>
<summary>Попълване на "GOOGLE_CLIENT_ID" и "GOOGLE_CLIENT_SECRET"</summary>

Създайте собствен проект в [сайта на Google Console за разработчици](https://console.cloud.google.com/projectcreate), след което го изберете и отидете на [Credentials](https://console.cloud.google.com/apis/credentials) страницата, от където кликнете на **CREATE CREDENTIALS** и изберете **OAuth client ID**. Изберете, че става въпрос за уеб приложение и задължително добавете унифициран идентификатор на ресурс (URI) в секцията **Authorized redirect URIs**, който да отговаря на `http://localhost:3000/api/auth/callback/google`.

Върнете се на **Credentials** страницата и от там отворете новосъздаденото **OAuth 2.0 Client ID**, от където трябва да вземете **Client ID** за `GOOGLE_CLIENT_ID` и **Client secret** за `GOOGLE_CLIENT_SECRET`.

</details>

<details>
<summary>Попълване на "GOOGLE_TAG_ID"</summary>

Създайте собствен акаунт в [сайта на Google Analytics](https://analytics.google.com/analytics/web/), към който трябва да закачите **Property**, от което вече да вземете **Measurement ID**, намиращо се в **Admin** > **Account** (създаденият от Вас акаунт) > **Property** (създаденото от Вас свойство) > **Data Streams**.

</details>

<details>
<summary>Попълване на "MAPBOX_ACCESS_TOKEN" и "MAPBOX_MAP_STYLE"</summary>

Създайте собствен акаунт в [сайта на Mapbox](https://account.mapbox.com/), след което използвайте **Default public token** за `MAPBOX_ACCESS_TOKEN`.

Променливата `MAPBOX_MAP_STYLE` вече е попълнена, но все пак, ако искате да експериментирате със собствен стил на картата, е нужно да отидете в [Mapbox Studio](https://studio.mapbox.com/). В горния ляв ъгъл на страницата кликнете на трите точки, за да се разпъне падащо меню и от там копирайте **Style URL** линка, който се е генерирал.

</details>

## Стартиране на локален сървър за разработка

```bash
npm run dev
```

## Създаване на версия за продуктова среда

```bash
npm run build
```

## Форматиране на кода

Ако желаете само да проверите дали има нещо за оправяне, изпълнете следните команди:

```bash
npm run lint #това изпълнява долните три команди една след друга
npm run lint:eslint
npm run lint:prettier
npm run lint:stylelint
```

Ако искате да оправите автоматично всичко, което е по силите на ESlint, Prettier и Stylelint, то изпълнете следните команди:

```bash
npm run lint:fix #това изпълнява долните три команди една след друга
npm run lint:eslint:fix
npm run lint:prettier:fix
npm run lint:stylelint:fix
```

Ако останат неразрешени проблеми, тогава трябва да се намесите и ръчно да ги оправите.

## Тестване на кода

```bash
npm run test
```

---

## Искате да допринесете?

Този проект е управляван изцяло от доброволци. Зад него не стои компания, която да го разработва и финансира. Ако смятате, че има какво да се промени към по-добро и имате желание да помогнете, ето няколко направления, в които можете да го направите.

Цялата комуникация се извършва чрез нашия [Discord сървър](https://discord.gg/NMRjZ4FdPs), така че трябва да бъдете там, за да проследите процесите.

1. **Исторически текст за забележителност** - използвайте канал `#landmarks`, за да сигнализирате, ако има неточности в текстовете на забележителностите или директно ги променете, както е описано в [Наръчника за текстовете](https://github.com/destinationbg/static-contents/blob/main/.github/CONTRIBUTING.md)
1. **Разработка** - прочетете нашите наръчници на доброволеца в [Laravel хранилището](https://github.com/destinationbg/backend-laravel/blob/main/.github/CONTRIBUTING.md) или в [Nuxt 3 хранилището](https://github.com/destinationbg/frontend-nuxt/blob/main/.github/CONTRIBUTING.md) и използвайте каналите `#frontend` и `#backend` в Discord
1. **Дизайн** - използвайте канал `#design` в Discord
1. **SEO оптимизация** - използвайте канал `#seo` в Discord
1. **Маркетинг и реклама** - използвайте канал `#marketing` в Discord
1. **Друго?** - свържете се с нас чрез нашата [контактна форма в сайта](https://destination.bg/contact) и ни кажете с какво друго искате да ни помогнете или ни пишете директно в канал `#general` в Discord

---

## Финансов принос

Като проект, управляван изцяло доброволно от общността, без голяма корпоративна подкрепа зад гърба си, приветстваме финансова помощ чрез [GitHub Sponsors](https://github.com/sponsors/destinationbg) и [OpenCollective](https://opencollective.com/destinationbg) страниците.

Предварително благодарим на всеки, който допринесе финансово за поддръжката и развитието на проекта! В изображението отдолу се съдържат аватарите на всички хора, които вече допринесоха.

<a href="https://opencollective.com/destinationbg"><img src="https://opencollective.com/destinationbg/contributors.svg?width=890" /></a>
