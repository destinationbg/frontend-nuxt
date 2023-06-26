<template>
    <div :class="['section-heading', variant]">
        <div class="title-holder">
            <div v-if="hasIcon" class="icon-container">
                <slot name="icon" />
            </div>
            <slot name="title" />
            <aside v-if="hasButtons">
                <slot name="buttons" />
            </aside>
        </div>
        <div v-if="hasDescription" class="description-holder">
            <p>
                <slot name="description" />
            </p>
        </div>
        <div v-if="hasLinks" class="links-holder">
            <slot name="links" />
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        /**
         * The section heading variant
         *
         * @type String
         * @default main-category
         * @name variant
         */
        variant: {
            type: String,
            default: 'main-category',
            validator: (value: string) => {
                return ['main-category', 'sub-category', 'inner-sub-category', 'inner-location'].includes(value)
            }
        },
        /**
         * If the section has an icon
         *
         * @type Boolean
         * @default false
         * @name hasIcon
         */
        hasIcon: {
            type: Boolean,
            default: false
        },
        /**
         * If the section has a button group
         *
         * @type Boolean
         * @default false
         * @name hasButtons
         */
        hasButtons: {
            type: Boolean,
            default: false
        },
        /**
         * If the section has links
         *
         * @type Boolean
         * @default false
         * @name hasLinks
         */
        hasLinks: {
            type: Boolean,
            default: false
        },
        /**
         * If the section has a description
         *
         * @type Boolean
         * @default false
         * @name hasDescription
         */
        hasDescription: {
            type: Boolean,
            default: false
        },
        /**
         * The section heading title
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
