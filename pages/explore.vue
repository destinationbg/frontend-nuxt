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
            :breadcrumbs="breadcrumbs"
        />
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    const breadcrumbs = [
        {
            name: 'Изследвайте',
            url: '/explore'
        },
        {
            name: 'Почивка и отдих',
            url: '/'
        },
        {
            name: 'Семейни приключения',
            url: '/'
        },
        {
            name: 'Зоологически градини',
            url: '/'
        },
        {
            name: 'Рилски манастир "Св. Иван Рилски"',
            url: '/location/rila-monastery'
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
