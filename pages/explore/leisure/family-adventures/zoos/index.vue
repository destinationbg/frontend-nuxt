<template>
    <Head>
        <Title>{{ t('page.explore.activity.zoos.title') }}</Title>

        <Meta name="description" :content="t('page.explore.activity.zoos.description')" />
    </Head>

    <main class="page-explore">
        <SectionTop
            :title="t('page.explore.activity.zoos.title')"
            :subtitle="t('page.explore.category.familyAdventures.title')"
            :description="t('page.explore.activity.zoos.description')"
            :breadcrumbs="breadcrumbs"
        />

        <section class="locations-list">
            <div class="container">
                <div class="wrapper">
                    <h2>{{ t('general.locations') }}</h2>

                    <ul>
                        <li v-for="(location, index) in locations" :key="index">
                            <BaseCard :data="location" type="rectangle-static" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import photoAVIF_1 from '@/assets/images/placeholders/locations/rila-monastery-1.avif'
    import photoAVIF_2 from '@/assets/images/placeholders/locations/shipka-monument-1.avif'
    import photoAVIF_3 from '@/assets/images/placeholders/locations/tsarevets-1.avif'

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
            name: t('page.explore.activity.zoos.title'),
            url: '/explore/leisure/family-adventures/zoos'
        }
    ]

    const locations = [
        {
            slug: 'rila-monastery',
            title: 'Рилски манастир "Св. Иван Рилски"',
            user_score: 3.4,
            location: 'до град Рила',
            image: photoAVIF_1
        },
        {
            slug: 'shipka-monument',
            title: 'Паметник на свободата "Шипка"',
            user_score: 4.2,
            location: 'до град Шипка',
            image: photoAVIF_2
        },
        {
            slug: 'tsarevets',
            title: 'Крепост "Царевец"',
            user_score: 4.6,
            location: 'град Велико Търново',
            image: photoAVIF_3
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
