<template>
    <div class="shevitsa">
        <div class="container">
            <div class="wrapper">
                <div class="holder">
                    <picture>
                        <img
                            src="~/assets/images/shevitsa-1.svg"
                            :alt="t('general.shevitsa.title')"
                            width="100"
                            height="100"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
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
