<template>
    <div class="shevitsa">
        <div class="container">
            <div class="wrapper">
                <div class="holder">
                    <BasePicture
                        :data="{
                            image: Shevitsa1,
                            title: t('general.shevitsa.title'),
                            width: 100,
                            height: 100,
                            decoding: 'async',
                            loading: 'lazy'
                        }"
                    />
                    <div class="tooltip-container center">
                        <div class="tooltip-content">
                            {{ t('general.shevitsa.describe') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Shevitsa1 from '@/assets/images/shevitsa-1.svg'

    const { t } = useI18n()

    defineProps({
        /**
         * The variant of the shevitsa image
         *
         * @type Number
         * @default
         * @name variant
         */
        variant: {
            type: Number,
            default: 1
        }
    })
</script>
