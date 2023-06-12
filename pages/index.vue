<template>
    <main class="page-homepage">
        <SectionTop :title="t('page.home.title')" />

        <Elements />
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
