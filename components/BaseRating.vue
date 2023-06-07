<template>
    <div :class="['rating', size]">
        <slot name="prefix" />

        <div
            class="stars-container"
            :title="t('general.rating.title', { rating: rating.toFixed(1), max_rating: maxRating.toFixed(1) })"
        >
            <div class="icons" :style="`width: ${percentage.toFixed(0)}%`"></div>
        </div>

        <slot name="suffix" />
    </div>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    const props = defineProps({
        /**
         * The rating size
         *
         * @type String
         * @default big
         * @name size
         */
        size: {
            type: String,
            default: 'big',
            validator: (value: string) => {
                return ['big', 'big-vertical', 'small'].includes(value)
            }
        },
        /**
         * The rating number
         *
         * @type Number
         * @default 0
         * @name rating
         */
        rating: {
            type: Number,
            default: 0
        },
        /**
         * The max rating number
         *
         * @type Number
         * @default 5
         * @name maxRating
         */
        maxRating: {
            type: Number,
            default: 5
        }
    })

    const percentage = (props.rating * 100) / props.maxRating
</script>
