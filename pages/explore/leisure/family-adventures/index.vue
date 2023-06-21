<template>
    <Head>
        <Title>{{ t('page.explore.category.familyAdventures.title') }}</Title>

        <Meta name="description" :content="t('page.explore.category.familyAdventures.description')" />
    </Head>

    <main class="page-explore">
        <SectionTop
            :title="t('page.explore.category.familyAdventures.title')"
            :subtitle="t('page.explore.category.leisure.title')"
            :description="t('page.explore.category.familyAdventures.description')"
            :breadcrumbs="breadcrumbs"
        />

        <div class="sections">
            <SectionRepeater
                v-for="(data, index) in activities"
                :key="index"
                type="activities-wide"
                :position="index % 2 == 0 ? true : false"
            >
                <template #heading>
                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath(data.url)">
                                {{ data.title }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ data.description }}</template>
                        <template #links>
                            <NuxtLink :to="localePath(data.url)">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>
                </template>
                <template #image>
                    <div class="photo-holder">
                        <div class="photo">
                            <NuxtLink :to="localePath(data.url)">
                                <picture>
                                    <img
                                        :src="data.image"
                                        :alt="data.title"
                                        width="360"
                                        height="640"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                            </NuxtLink>
                        </div>
                    </div>
                </template>
                <template v-if="index + 1 !== activities.length" #shevitsa>
                    <SectionShevitsa :variant="1" />
                </template>
            </SectionRepeater>
        </div>
    </main>
</template>

<script setup lang="ts">
    import zoos from '@/assets/images/placeholders/activities/wide/zoos.avif'
    import camping from '@/assets/images/placeholders/activities/wide/camping.avif'
    import fishing from '@/assets/images/placeholders/activities/wide/fishing.avif'
    import winterSports from '@/assets/images/placeholders/activities/wide/winter-sports.avif'
    import beaches from '@/assets/images/placeholders/activities/wide/beaches.avif'

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
        },
        {
            name: t('page.explore.category.familyAdventures.title'),
            url: '/explore/leisure/family-adventures'
        }
    ]

    const activities = [
        {
            title: t('page.explore.activity.zoos.title'),
            description: t('page.explore.activity.zoos.description'),
            image: zoos,
            url: '/explore/leisure/family-adventures/zoos'
        },
        {
            title: t('page.explore.activity.camping.title'),
            description: t('page.explore.activity.camping.description'),
            image: camping,
            url: '/explore/leisure/family-adventures/camping'
        },
        {
            title: t('page.explore.activity.fishing.title'),
            description: t('page.explore.activity.fishing.description'),
            image: fishing,
            url: '/explore/leisure/family-adventures/fishing'
        },
        {
            title: t('page.explore.activity.winterSports.title'),
            description: t('page.explore.activity.winterSports.description'),
            image: winterSports,
            url: '/explore/leisure/family-adventures/winter-sports'
        },
        {
            title: t('page.explore.activity.beaches.title'),
            description: t('page.explore.activity.beaches.description'),
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
