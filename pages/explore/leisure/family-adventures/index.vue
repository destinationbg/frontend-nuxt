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
            <section class="category">
                <div class="container">
                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/zoos')">
                                {{ t('page.explore.activity.zoos.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.activity.zoos.description') }}</template>
                        <template #links>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/zoos')">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>

                    <SectionShevitsa :variant="1" />

                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/camping')">
                                {{ t('page.explore.activity.camping.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.activity.camping.description') }}</template>
                        <template #links>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/camping')">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>

                    <SectionShevitsa :variant="1" />

                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/fishing')">
                                {{ t('page.explore.activity.fishing.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.activity.fishing.description') }}</template>
                        <template #links>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/fishing')">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>

                    <SectionShevitsa :variant="1" />

                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/winter-sports')">
                                {{ t('page.explore.activity.winterSports.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.activity.winterSports.description') }}</template>
                        <template #links>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/winter-sports')">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>

                    <SectionShevitsa :variant="1" />

                    <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/beaches')">
                                {{ t('page.explore.activity.beaches.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.activity.beaches.description') }}</template>
                        <template #links>
                            <NuxtLink :to="localePath('/explore/leisure/family-adventures/beaches')">
                                <span>{{ t('general.buttons.viewAllLocations') }}</span>
                                <i class="fi fi-rr-arrow-small-right" />
                            </NuxtLink>
                        </template>
                    </SectionHeading>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
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

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
