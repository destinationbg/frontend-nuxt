<template>
    <picture>
        <slot name="source" />
        <img
            :src="data.image"
            :alt="data.title"
            :width="data.width"
            :height="data.height"
            :decoding="data.decoding"
            :loading="data.loading ? data.loading : null"
        />
    </picture>
</template>

<script setup lang="ts">
    defineProps({
        /**
         * The picture data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => {}
        }
    })
</script>
