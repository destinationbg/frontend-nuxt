<template>
    <Head>
        <Title>{{ t('page.contacts.title') }}</Title>

        <Meta name="description" :content="t('page.contacts.description')" />
    </Head>

    <main class="page-contacts">
        <SectionTop :title="t('page.contacts.title')" :description="t('page.contacts.description')" />
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
