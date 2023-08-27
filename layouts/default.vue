<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
        <Head>
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
            </template>

            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
            </template>
        </Head>

        <Body>
            <AppHeader :class="alternative ? 'alternative' : null" />

            <slot />

            <AppFooter />
        </Body>
    </Html>
</template>

<script setup lang="ts">
    import { socialNetworks } from '@/config/social-networks'

    const { t } = useI18n()
    const appName = t('meta.appName')
    const appUrl = String(import.meta.env.VITE_APP_URL)

    const head = useLocaleHead({
        addDirAttribute: true,
        identifierAttribute: 'id',
        addSeoAttributes: true
    })

    defineProps({
        /**
         * If the page header should use an alternative style
         *
         * @type Boolean
         * @default false
         * @name alternative
         */
        alternative: {
            type: Boolean,
            default: false
        }
    })

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - ${appName}` : `${appName} - ${String(import.meta.env.VITE_APP_DOMAIN_EN)}`
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Description'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    })

    // If the build is not for a production environment, then make the entire application unable to be crawled and indexed by the search engine bots
    if (import.meta.env.VITE_APP_ENV !== 'production') {
        useHead({
            meta: [
                {
                    name: 'robots',
                    content: 'noindex, follow'
                }
            ]
        })
    }

    useSeoMeta({
        ogImage: `${appUrl}/images/og-image.png`
    })

    useSchemaOrg([
        defineOrganization({
            name: appName,
            logo: `${appUrl}/images/logo.svg`,
            sameAs: socialNetworks.map(({ link }) => link)
        })
    ])
</script>
