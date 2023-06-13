<template>
    <Head>
        <Title>{{ t('page.explore.category.leisure.title') }}</Title>

        <Meta name="description" :content="t('page.explore.category.leisure.description')" />
    </Head>

    <main class="page-explore">
        <SectionTop
            :title="t('page.explore.category.leisure.title')"
            :subtitle="t('page.explore.title')"
            :description="t('page.explore.category.leisure.description')"
            :breadcrumbs="breadcrumbs"
        />

        <div class="sections">
            <section class="category">
                <div class="container">
                    <SectionHeading :has-icon="true" :has-description="true" variant="sub-category">
                        <template #icon>
                            <img
                                src="~/assets/images/icons/family.svg"
                                alt="Family icon"
                                width="100"
                                height="100"
                                loading="lazy"
                                decoding="async"
                            />
                        </template>
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures')">
                                {{ t('page.explore.category.familyAdventures.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.category.familyAdventures.description') }}</template>
                    </SectionHeading>

                    <BaseDraggableCards :items-count="activities.length">
                        <SectionCard v-for="(activity, index) in activities" :key="index" :data="activity" />
                    </BaseDraggableCards>
                </div>
            </section>

            <SectionShevitsa :variant="1" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import zoos from '@/assets/images/placeholders/activities/zoos.avif'
    import camping from '@/assets/images/placeholders/activities/camping.avif'
    import fishing from '@/assets/images/placeholders/activities/fishing.avif'
    import winterSports from '@/assets/images/placeholders/activities/winter-sports.avif'
    import beaches from '@/assets/images/placeholders/activities/beaches.avif'

    const { t } = useI18n()
    const localePath = useLocalePath()

    const breadcrumbs = [
        {
            name: t('page.explore.title'),
            url: '/explore'
        },
        {
            name: t('page.explore.category.leisure.title'),
            url: '/explore/leisure'
        }
    ]

    const activities = [
        {
            title: t('page.explore.activity.zoos.title'),
            image: zoos,
            url: '/explore/leisure/family-adventures/zoos'
        },
        {
            title: t('page.explore.activity.camping.title'),
            image: camping,
            url: '/explore/leisure/family-adventures/camping'
        },
        {
            title: t('page.explore.activity.fishing.title'),
            image: fishing,
            url: '/explore/leisure/family-adventures/fishing'
        },
        {
            title: t('page.explore.activity.winterSports.title'),
            image: winterSports,
            url: '/explore/leisure/family-adventures/winter-sports'
        },
        {
            title: t('page.explore.activity.beaches.title'),
            image: beaches,
            url: '/explore/leisure/family-adventures/beaches'
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
