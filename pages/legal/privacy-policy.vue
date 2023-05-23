<template>
    <Head>
        <Title>{{ t('page.legal.privacyPolicy.title') }}</Title>

        <Meta name="description" :content="t('page.legal.privacyPolicy.title')" />
    </Head>

    <main class="page-legal">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.legal.privacyPolicy.title') }}</h1>
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
