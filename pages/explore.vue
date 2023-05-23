<template>
    <Head>
        <Title>{{ t('page.explore.title') }}</Title>

        <Meta name="description" :content="t('page.explore.description')" />
    </Head>

    <main class="page-explore">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <div class="subtitle">{{ t('page.explore.subtitle') }}</div>
                    <h1>{{ t('page.explore.title') }}</h1>
                    <p>{{ t('page.explore.description') }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
