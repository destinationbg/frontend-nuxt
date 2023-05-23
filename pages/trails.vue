<template>
    <Head>
        <Title>{{ t('page.trails.title') }}</Title>

        <Meta name="description" :content="t('page.trails.description')" />
    </Head>

    <main class="page-trails">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <div class="subtitle">{{ t('page.trails.subtitle') }}</div>
                    <h1>{{ t('page.trails.title') }}</h1>
                    <p>{{ t('page.trails.description') }}</p>
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
