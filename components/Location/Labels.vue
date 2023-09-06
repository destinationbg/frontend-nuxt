<template>
    <section class="location-labels">
        <div class="wrapper">
            <SectionHeading :has-icon="true" variant="inner-location">
                <template #icon>
                    <i class="fi fi-rr-tags" />
                </template>
                <template #title>
                    <h2>{{ t('page.location.section.labels.title') }}</h2>
                </template>
            </SectionHeading>

            <ul class="labels-list">
                <li v-for="(feature, index) in data" :key="index" class="badge">
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
