<template>
    <Head>
        <Title>{{ t('page.explore.category.zoo.title') }}</Title>

        <Meta name="description" :content="t('page.explore.category.zoo.description')" />
    </Head>

    <main class="page-explore">
        <SectionTop
            :title="t('page.explore.category.zoo.title')"
            :subtitle="t('page.explore.category.familyAdventures.title')"
            :description="t('page.explore.category.zoo.description')"
            :breadcrumbs="breadcrumbs"
        />

        <section class="list">
            <div class="container">
                <p>
                    List...
                    <NuxtLink to="/location/rila-monastery">Рилски манастир "Св. Иван Рилски"</NuxtLink>
                </p>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    const breadcrumbs = [
        {
            name: t('page.explore.title'),
            url: '/explore'
        },
        {
            name: t('page.explore.category.leisure.title'),
            url: '/explore/leisure'
        },
        {
            name: t('page.explore.category.familyAdventures.title'),
            url: '/explore/leisure/family-adventures'
        },
        {
            name: t('page.explore.category.zoo.title'),
            url: '/explore/leisure/family-adventures/zoo'
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
