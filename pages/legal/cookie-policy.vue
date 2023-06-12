<template>
    <Head>
        <Title>{{ t('page.legal.cookiePolicy.title') }}</Title>

        <Meta name="description" :content="t('page.legal.cookiePolicy.title')" />
    </Head>

    <main class="page-legal">
        <SectionTop :title="t('page.legal.cookiePolicy.title')" />
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
