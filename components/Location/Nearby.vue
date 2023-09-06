<template>
    <section class="location-nearby">
        <div class="container">
            <div class="wrapper">
                <SectionHeading :has-icon="true" variant="inner-location">
                    <template #icon>
                        <i class="fi fi-rr-road" />
                    </template>
                    <template #title>
                        <h2>{{ t('page.location.section.nearby.title') }}</h2>
                    </template>
                </SectionHeading>

                <ul class="locations-list">
                    <li v-for="place in data" :key="place">
                        <SectionCard type="rectangle-static" :data="place" />
                    </li>
                </ul>
            </div>
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
