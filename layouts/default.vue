<template>
    <div>
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
                <AppHeader />

                <slot />

                <AppFooter />
            </Body>
        </Html>
    </div>
</template>

<script setup lang="ts">
    import { socialNetworks } from '@/config/social-networks'

    const { t } = useI18n()
    const appName = t('meta.appName')
    const domain = String(import.meta.env.VITE_APP_DOMAIN)
    const appUrl = String(import.meta.env.VITE_APP_URL)

    const head = useLocaleHead({
        addDirAttribute: true,
        identifierAttribute: 'id',
        addSeoAttributes: true
    })

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - ${appName}` : `${appName} - ${domain}`
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
