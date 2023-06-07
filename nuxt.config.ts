import { resolve } from 'path'
import { localeDefault, localeDetails } from './config/locales'

const projectRootDir = resolve(__dirname)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // typescript: {
    //     strict: true,
    //     typeCheck: true
    // },
    devtools: {
        enabled: false
    },
    experimental: {
        payloadExtraction: false,
        reactivityTransform: false
    },
    postcss: {
        plugins: {
            autoprefixer: {}
        }
    },
    alias: {
        '!': resolve(projectRootDir, 'node_modules')
    },
    modules: [
        // 'nuxt-gtag',
        // '@sidebase/nuxt-auth',
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
        [
            'nuxt-schema-org',
            {
                schemaOrg: {
                    host: process.env.VITE_APP_URL
                }
            }
        ],
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
            }
        ]
    ],
    // auth: {
    //     origin: process.env.VITE_APP_URL,
    //     enableGlobalAppMiddleware: true
    // },
    i18n: {
        baseUrl: process.env.VITE_APP_URL,
        locales: localeDetails,
        defaultLocale: localeDefault,
        lazy: true,
        langDir: 'locales/',
        strategy: 'prefix_except_default',
        vueI18n: './i18n.config.ts'
    }
    // gtag: {
    //     id: process.env.GOOGLE_TAG_ID
    // }
})
