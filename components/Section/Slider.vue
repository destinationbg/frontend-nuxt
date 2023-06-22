<template>
    <section class="hero-slider">
        <div v-for="(slide, index) in data" :key="index" :class="['slide', activeSlide === index ? 'active' : 'inactive']">
            <picture>
                <img :src="slide.image" :alt="slide.title" decoding="async" />
            </picture>

            <div class="wrapper">
                <div class="location">
                    <i class="fi fi-rr-marker" />
                    <span>{{ slide.location }}</span>
                </div>

                <h1>
                    <NuxtLink :to="localePath(slide.url)">
                        {{ slide.title }}
                    </NuxtLink>
                </h1>

                <NuxtLink :to="localePath(slide.url)" class="button big primary">
                    <span>{{ t('general.buttons.learnMore') }}</span>
                </NuxtLink>
            </div>
        </div>

        <div class="controls">
            <ul>
                <li
                    v-for="(slide, controlIndex) in data"
                    :key="controlIndex"
                    :class="activeSlide === controlIndex ? 'active' : null"
                >
                    <BaseButton
                        type="button"
                        size="small"
                        variant="borderless"
                        :title="slide.title"
                        @click.prevent="changeSlide(controlIndex)"
                    >
                        <template #text>
                            <span>{{ slide.title }}</span>
                        </template>
                    </BaseButton>
                </li>
            </ul>
            <div class="counter">
                {{ leadingZero(activeSlide + 1, 2) }}
                <span>/{{ leadingZero(data.length, 2) }}</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { leadingZero } from '@/composables/useLeadingZero'

    const { t } = useI18n()
    const localePath = useLocalePath()

    defineProps({
        /**
         * The slider data
         *
         * @type Object
         * @default
         * @name data
         */
        data: {
            type: Object,
            default: null
        }
    })

    const activeSlide = ref(0)
    const changeSlide = (index: number) => {
        activeSlide.value = index
    }
</script>
