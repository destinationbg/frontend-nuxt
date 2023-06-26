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

        <div class="sections">
            <SectionRepeater
                v-for="(data, index) in categories"
                :key="index"
                type="activities"
                :position="index % 2 == 0 ? true : false"
            >
                <template #heading>
                    <SectionHeading :has-description="true" variant="main-category">
                        <template #title>
                            <h2>
                                <NuxtLink :to="localePath(data.url)">
                                    {{ data.title }}
                                </NuxtLink>
                            </h2>
                        </template>
                        <template #description>{{ data.description }}</template>
                    </SectionHeading>
                </template>
                <template #cards>
                    <BaseDraggableCards
                        :items-count="data.subcategories.length"
                        :controls="data.controls"
                        :alternative="data.alternative"
                    >
                        <SectionCard
                            v-for="(category, categoryIndex) in data.subcategories"
                            :key="categoryIndex"
                            :data="category"
                            :type="data.alternative ? 'alternative' : 'default'"
                        />
                    </BaseDraggableCards>
                </template>
                <template v-if="index + 1 !== categories.length" #shevitsa>
                    <SectionShevitsa :variant="1" />
                </template>
            </SectionRepeater>
        </div>
    </main>
</template>

<script setup lang="ts">
    import familyAdventures from '@/assets/images/placeholders/categories/family-adventures.avif'
    import romanceForTwo from '@/assets/images/placeholders/categories/romance-for-two.avif'
    import timeWithFriends from '@/assets/images/placeholders/categories/time-with-friends.avif'
    import soloTravelers from '@/assets/images/placeholders/categories/solo-travelers.avif'

    import architecturalAchievements from '@/assets/images/placeholders/categories/architectural-achievements.avif'
    import religiousSites from '@/assets/images/placeholders/categories/religious-sites.avif'
    import culture from '@/assets/images/placeholders/categories/culture.avif'
    import picturesqueNature from '@/assets/images/placeholders/categories/picturesque-nature.avif'

    import localities from '@/assets/images/icons/localities.svg'
    import touristRegions from '@/assets/images/icons/tourist-regions.svg'
    import unescoWorldHeritage from '@/assets/images/icons/unesco-world-heritage.svg'

    import spring from '@/assets/images/placeholders/categories/spring.avif'
    import summer from '@/assets/images/placeholders/categories/summer.avif'
    import autumn from '@/assets/images/placeholders/categories/autumn.avif'
    import winter from '@/assets/images/placeholders/categories/winter.avif'

    const { t } = useI18n()
    const localePath = useLocalePath()

    const categories = [
        {
            title: t('page.explore.category.leisure.title'),
            description: t('page.explore.category.leisure.description'),
            url: '/explore/leisure',
            controls: true,
            alternative: false,
            subcategories: [
                {
                    title: t('page.explore.category.familyAdventures.title'),
                    image: familyAdventures,
                    url: '/explore/leisure/family-adventures'
                },
                {
                    title: t('page.explore.category.romanceForTwo.title'),
                    image: romanceForTwo,
                    url: '/explore/leisure/romance-for-two'
                },
                {
                    title: t('page.explore.category.timeWithFriends.title'),
                    image: timeWithFriends,
                    url: '/explore/leisure/time-with-friends'
                },
                {
                    title: t('page.explore.category.soloTravelers.title'),
                    image: soloTravelers,
                    url: '/explore/leisure/solo-travelers'
                }
            ]
        },
        {
            title: t('page.explore.category.story.title'),
            description: t('page.explore.category.story.description'),
            url: '/explore/story',
            controls: false,
            alternative: true,
            subcategories: [
                {
                    title: t('page.explore.category.localities.title'),
                    description: t('page.explore.category.localities.description'),
                    button: t('general.buttons.viewLocalities'),
                    icon: localities,
                    url: '/explore/story/localities'
                },
                {
                    title: t('page.explore.category.touristRegions.title'),
                    description: t('page.explore.category.touristRegions.description'),
                    button: t('general.buttons.viewRegions'),
                    icon: touristRegions,
                    url: '/explore/story/tourist-regions'
                },
                {
                    title: t('page.explore.category.unescoWorldHeritage.title'),
                    description: t('page.explore.category.unescoWorldHeritage.description'),
                    button: t('general.buttons.viewUnescoSites'),
                    icon: unescoWorldHeritage,
                    url: '/explore/story/unesco-world-heritage'
                }
            ]
        },
        {
            title: t('page.explore.category.wellSpentTime.title'),
            description: t('page.explore.category.wellSpentTime.description'),
            url: '/explore/well-spent-time',
            controls: true,
            alternative: false,
            subcategories: [
                {
                    title: t('page.explore.category.architecturalAchievements.title'),
                    image: architecturalAchievements,
                    url: '/explore/well-spent-time/architectural-achievements'
                },
                {
                    title: t('page.explore.category.religiousSites.title'),
                    image: religiousSites,
                    url: '/explore/well-spent-time/religious-sites'
                },
                {
                    title: t('page.explore.category.culture.title'),
                    image: culture,
                    url: '/explore/well-spent-time/culture'
                },
                {
                    title: t('page.explore.category.picturesqueNature.title'),
                    image: picturesqueNature,
                    url: '/explore/well-spent-time/picturesque-nature'
                }
            ]
        },
        {
            title: t('page.explore.category.seasonalActivities.title'),
            description: t('page.explore.category.seasonalActivities.description'),
            url: '/explore/seasonal-activities',
            controls: true,
            alternative: false,
            subcategories: [
                {
                    title: t('page.explore.category.spring.title'),
                    image: spring,
                    url: '/explore/seasonal-activities/spring'
                },
                {
                    title: t('page.explore.category.summer.title'),
                    image: summer,
                    url: '/explore/seasonal-activities/summer'
                },
                {
                    title: t('page.explore.category.autumn.title'),
                    image: autumn,
                    url: '/explore/seasonal-activities/autumn'
                },
                {
                    title: t('page.explore.category.winter.title'),
                    image: winter,
                    url: '/explore/seasonal-activities/winter'
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
