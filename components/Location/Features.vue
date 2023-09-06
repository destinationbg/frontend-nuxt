<template>
    <section class="location-features">
        <div class="wrapper">
            <SectionHeading :has-icon="true" variant="inner-location">
                <template #icon>
                    <i class="fi fi-rr-shoe-prints" />
                </template>
                <template #title>
                    <h2>{{ t('page.location.section.features.title') }}</h2>
                </template>
            </SectionHeading>

            <ul class="features-list">
                <li v-for="(feature, index) in data" :key="index" class="badge">
                    <i class="fi fi-rr-check"></i>
                    <span>{{ feature }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    defineProps({
        /**
         * The location photos
         *
         * @type Array
         * @default []
         * @name data
         */
        data: {
            type: Array,
            default: () => []
        }
    })

    const { t } = useI18n()
</script>
