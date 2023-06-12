<template>
    <Head>
        <Title>{{ t('page.about.title') }}</Title>

        <Meta name="description" :content="t('page.about.description')" />
    </Head>

    <main class="page-about">
        <SectionTop :title="t('page.about.title')" :description="t('page.about.description')" />
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
