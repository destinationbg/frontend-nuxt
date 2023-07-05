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
