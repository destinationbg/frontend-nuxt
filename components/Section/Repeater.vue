<template>
    <div v-if="type === 'activities'" :class="type">
        <section class="repeater">
            <div class="container">
                <slot name="heading" />
                <slot name="cards" />
            </div>
        </section>
    </div>
    <div v-else-if="type === 'categories'" :class="type">
        <section class="repeater">
            <slot name="heading" />

            <slot name="grid" />

            <slot name="button" />
        </section>
    </div>
    <div v-else :class="[type, position !== null ? (position ? 'left' : 'right') : null]">
        <section class="repeater">
            <div class="container">
                <slot name="heading" />
                <slot name="image" />
            </div>
        </section>
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
