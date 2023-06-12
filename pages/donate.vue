<template>
    <Head>
        <Title>{{ t('page.donate.title') }}</Title>

        <Meta name="description" :content="t('page.donate.description')" />
    </Head>

    <main class="page-donate">
        <SectionTop :title="t('page.donate.title')" :description="t('page.donate.description')" />
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
