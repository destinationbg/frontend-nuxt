<template>
    <p v-html="useTruncateText(comment, maxLength)" />

    <div v-if="comment.length > maxLength">
        <BaseButton type="button" variant="borderless" size="small">
            <template #text>
                <span>{{ t('general.buttons.showMore') }}</span>
            </template>
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
    import { useTruncateText } from '@/composables/useTruncateText'

    defineProps({
        /**
         * The review comment id
         *
         * @type Number
         * @default 0
         * @name id
         */
        id: {
            type: Number,
            default: 0
        },
        /**
         * The review comment text
         *
         * @type String
         * @default null
         * @name comment
         */
        comment: {
            type: String,
            default: null
        },
        /**
         * The review max length of text before truncation
         *
         * @type Number
         * @default 150
         * @name maxLength
         */
        maxLength: {
            type: Number,
            default: 150
        }
    })

    const { t } = useI18n()
</script>
