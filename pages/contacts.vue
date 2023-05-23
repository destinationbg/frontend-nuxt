<template>
    <Head>
        <Title>{{ t('page.contacts.title') }}</Title>

        <Meta name="description" :content="t('page.contacts.description')" />
    </Head>

    <main class="page-contacts">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.contacts.title') }}</h1>
                    <p>{{ t('page.contacts.description') }}</p>
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
