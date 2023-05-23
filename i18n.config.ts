import { datetimeFormats, localeDefault } from './config/locales'

import en from './locales/en'
import bg from './locales/bg'

export default defineI18nConfig(() => ({
    locale: localeDefault,
    fallbackLocale: localeDefault,
    langDir: 'locales/',
    lazy: true,
    legacy: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
    },
    datetimeFormats,
    messages: {
        en,
        bg
    }
}))
