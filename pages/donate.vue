<template>
    <Head>
        <Title>{{ t('page.donate.title') }}</Title>

        <Meta name="description" :content="t('page.donate.description')" />
    </Head>

    <main class="page-donate">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.donate.title') }}</h1>
                    <p>{{ t('page.donate.description') }}</p>
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
