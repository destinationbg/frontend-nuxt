<template>
    <Head>
        <Title>{{ t('page.legal.termsAndConditions.title') }}</Title>

        <Meta name="description" :content="t('page.legal.termsAndConditions.title')" />
    </Head>

    <main class="page-legal">
        <SectionTop :title="t('page.legal.termsAndConditions.title')" />
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
