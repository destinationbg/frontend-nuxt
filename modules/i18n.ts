import { createResolver, defineNuxtModule } from '@nuxt/kit'
import { localeDetails } from '../config/locales'

export default defineNuxtModule({
    async setup(_options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        nuxt.hook('i18n:registerModule', (register) => {
            register({
                langDir: resolve('../locales'),
                locales: localeDetails
            })
        })
    }
})
