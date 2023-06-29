<template>
    <section class="location-map">
        <div class="container">
            <div class="wrapper">
                <picture>
                    <img :src="data.mapPlaceholder" :alt="data.title" width="640" height="360" loading="lazy" decoding="async" />
                </picture>
                <BaseButton size="big">
                    <template #text>
                        <span>{{ t('general.buttons.showMap') }}</span>
                    </template>
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    defineProps({
        /**
         * The location data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => ({})
        }
    })
</script>
