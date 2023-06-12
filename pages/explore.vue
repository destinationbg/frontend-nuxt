<template>
    <Head>
        <Title>{{ t('page.explore.title') }}</Title>

        <Meta name="description" :content="t('page.explore.description')" />
    </Head>

    <main class="page-explore">
        <SectionTop
            :title="t('page.explore.title')"
            :subtitle="t('page.explore.subtitle')"
            :description="t('page.explore.description')"
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
