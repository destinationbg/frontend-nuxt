<template>
    <Head>
        <Title>{{ t('page.about.title') }}</Title>

        <Meta name="description" :content="t('page.about.description')" />
    </Head>

    <main class="page-about">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.about.title') }}</h1>
                    <p>{{ t('page.about.description') }}</p>
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
