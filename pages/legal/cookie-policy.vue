<template>
    <Head>
        <Title>{{ t('page.legal.cookiePolicy.title') }}</Title>

        <Meta name="description" :content="t('page.legal.cookiePolicy.title')" />
    </Head>

    <main class="page-legal">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.legal.cookiePolicy.title') }}</h1>
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
