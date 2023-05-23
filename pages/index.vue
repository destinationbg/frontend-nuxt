<template>
    <main class="page-homepage">
        <section class="top-section">
            <div class="container">
                <div class="wrapper">
                    <h1>{{ t('page.home.title') }}</h1>
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
