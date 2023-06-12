<template>
    <Head>
        <Title>{{ t('page.map.title') }}</Title>

        <Meta name="description" :content="t('page.map.description')" />
    </Head>

    <main class="page-map">
        <SectionTop :title="t('page.map.title')" :subtitle="t('page.map.subtitle')" :description="t('page.map.description')" />
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
