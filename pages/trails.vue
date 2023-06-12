<template>
    <Head>
        <Title>{{ t('page.trails.title') }}</Title>

        <Meta name="description" :content="t('page.trails.description')" />
    </Head>

    <main class="page-trails">
        <SectionTop
            :title="t('page.trails.title')"
            :subtitle="t('page.trails.subtitle')"
            :description="t('page.trails.description')"
        />
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
