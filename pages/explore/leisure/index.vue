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
        }
    ]

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
