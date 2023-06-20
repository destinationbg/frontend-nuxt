<template>
    <div v-if="type === 'activities'" :class="type">
        <slot name="heading" />
        <slot name="cards" />
    </div>
    <div v-else :class="[type, position !== null ? (position ? 'left' : 'right') : null]">
        <slot name="heading" />
        <slot name="image" />
    </div>

    <slot name="shevitsa" />
</template>

<script setup lang="ts">
    defineProps({
        /**
         * The type of the repeater
         *
         * @type String
         * @default null
         * @name type
         */
        type: {
            type: String,
            default: null
        },
        /**
         * The position of the repeater
         *
         * @type Boolean
         * @default null
         * @name position
         */
        position: {
            type: Boolean,
            default: null
        }
    })
</script>
