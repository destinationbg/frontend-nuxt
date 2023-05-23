<template>
    <Head>
        <Title>{{ t('page.map.title') }}</Title>

        <Meta name="description" :content="t('page.map.description')" />
    </Head>

    <main class="page-map">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <div class="subtitle">{{ t('page.map.subtitle') }}</div>
                    <h1>{{ t('page.map.title') }}</h1>
                    <p>{{ t('page.map.description') }}</p>
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
