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
            <section class="category">
                <div class="container">
                    <SectionHeading :has-description="true" variant="main-category">
                        <template #title>
                            <NuxtLink :to="localePath('/explore/leisure')">
                                {{ t('page.explore.category.leisure.title') }}
                            </NuxtLink>
                        </template>
                        <template #description>{{ t('page.explore.category.leisure.description') }}</template>
                    </SectionHeading>

                    <BaseDraggableCards :items-count="subcategories.length">
                        <SectionCard v-for="(subcategory, index) in subcategories" :key="index" :data="subcategory" />
                    </BaseDraggableCards>
                </div>
            </section>

            <SectionShevitsa :variant="1" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import familyAdventures from '@/assets/images/placeholders/categories/family-adventures.avif'
    import romanceForTwo from '@/assets/images/placeholders/categories/romance-for-two.avif'
    import timeWithFriends from '@/assets/images/placeholders/categories/time-with-friends.avif'
    import soloTravelers from '@/assets/images/placeholders/categories/solo-travelers.avif'

    const { t } = useI18n()
    const localePath = useLocalePath()

    const subcategories = [
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

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
