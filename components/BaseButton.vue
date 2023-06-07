<template>
    <button
        :class="['button', variant ? variant : null, color ? color : null, size ? size : null, disabled ? 'disabled' : null]"
        :disabled="disabled"
        :type="type"
        :title="title"
        :aria-label="title"
    >
        <slot name="icon-left" />
        <slot name="text" />
        <slot name="icon-right" />
    </button>
</template>

<script setup lang="ts">
    defineProps({
        /**
         * The button type
         *
         * @type String
         * @default button
         * @name type
         */
        type: {
            type: String,
            default: 'button',
            validator: (value: string) => {
                return ['button', 'submit', 'reset'].includes(value)
            }
        },
        /**
         * The button size
         *
         * @type String
         * @default big
         * @name size
         */
        size: {
            type: String,
            default: null,
            validator: (value: string) => {
                return [null, 'big', 'small'].includes(value)
            }
        },
        /**
         * If the button is disabled
         *
         * @type Boolean
         * @default false
         * @name disabled
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * The button variant
         *
         * @type String
         * @default primary
         * @name variant
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value: string) => {
                return ['primary', 'secondary', 'borderless'].includes(value)
            }
        },
        /**
         * The button background color
         *
         * @type String
         * @default
         * @name color
         */
        color: {
            type: String,
            default: null,
            validator: (value: string) => {
                return [null, 'blue', 'green', 'gray'].includes(value)
            }
        },
        /**
         * The button title
         *
         * @type String
         * @default
         * @name title
         */
        title: {
            type: String,
            default: null
        }
    })
</script>
