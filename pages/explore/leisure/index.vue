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
            <SectionRepeater
                v-for="(data, index) in subcategories"
                :key="index"
                type="activities"
                :position="index % 2 == 0 ? true : false"
            >
                <template #heading>
                    <SectionHeading :has-icon="true" :has-description="true" variant="sub-category">
                        <template #icon>
                            <img :src="data.icon" alt="Icon" width="100" height="100" loading="lazy" decoding="async" />
                        </template>
                        <template #title>
                            <NuxtLink :to="localePath(data.url)">
                                {{ data.title }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ data.description }}</template>
                    </SectionHeading>
                </template>
                <template #cards>
                    <BaseDraggableCards :items-count="data.activities.length">
                        <SectionCard v-for="(activity, activityIndex) in data.activities" :key="activityIndex" :data="activity" />
                    </BaseDraggableCards>
                </template>
                <template v-if="index + 1 !== subcategories.length" #shevitsa>
                    <SectionShevitsa :variant="1" />
                </template>
            </SectionRepeater>
        </div>
    </main>
</template>

<script setup lang="ts">
    import family from '@/assets/images/icons/family.svg'

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

    const subcategories = [
        {
            icon: family,
            title: t('page.explore.category.familyAdventures.title'),
            description: t('page.explore.category.familyAdventures.description'),
            url: '/explore/leisure/family-adventures',
            activities: [
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
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
