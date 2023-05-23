<template>
    <Head>
        <Title>{{ t('general.error.title', { code: props.error.statusCode }) }} - {{ t('meta.appName') }}</Title>
    </Head>

    <main class="page-error">
        <div class="wrapper">
            <h1>
                <span>{{ props.error.statusCode }}</span>
            </h1>
            <h2>{{ t('general.error.' + props.error.statusCode) }}</h2>

            <button v-if="!['401', '429'].includes(props.error.statusCode)" class="button big blue" @click="handleError">
                <span>Back</span>
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n()
    const localePath = useLocalePath()
    const props = defineProps({
        error: Object
    })

    const handleError = () => clearError({ redirect: localePath('/') })
</script>
