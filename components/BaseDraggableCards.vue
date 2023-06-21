<template>
    <div :class="['sub-categories', alternative ? 'alternative' : null, !controls ? 'no-controls' : null]">
        <div ref="container" class="wrapper">
            <BaseButton
                v-if="controls"
                :disabled="!canScrollLeft"
                :title="t('general.buttons.scrollLeft')"
                @click="scrollContainer(-0.4)"
            >
                <template #icon-left>
                    <i class="fi fi-rr-arrow-small-left" />
                </template>
            </BaseButton>
            <slot />
            <BaseButton
                v-if="controls"
                :disabled="!canScrollRight"
                :title="t('general.buttons.scrollRight')"
                @click="scrollContainer(0.4)"
            >
                <template #icon-left>
                    <i class="fi fi-rr-arrow-small-right" />
                </template>
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { t } = useI18n()

    const props = defineProps({
        /**
         * The count of items
         *
         * @type Number
         * @default 0
         * @name itemsCount
         */
        itemsCount: {
            type: Number,
            default: 0
        },
        /**
         * If the items' container has an alternative style
         *
         * @type Boolean
         * @default false
         * @name alternative
         */
        alternative: {
            type: Boolean,
            default: false
        },
        /**
         * If the items' container has controls
         *
         * @type Boolean
         * @default true
         * @name controls
         */
        controls: {
            type: Boolean,
            default: true
        }
    })

    const container = ref<HTMLElement | null>(null)
    const state = reactive({
        /**
         * The current scroll position of the container
         *
         * @type Number
         */
        scrollPosition: 0,
        /**
         * The maximum scroll position of the container
         *
         * @type Number
         */
        maxScrollPosition: 0,
        /**
         * The width of the container
         *
         * @type Number
         */
        containerWidth: 0
    })

    /**
     * Scroll the container by a percentage of its width
     *
     * @param percentage - The percentage to scroll (positive for right, negative for left)
     */
    const scrollContainer = (percentage: number) => {
        if (!container.value) return
        const scrollAmount = Math.floor(state.containerWidth * percentage)
        const minScroll = 0
        const maxScroll = container.value.scrollWidth - container.value.clientWidth
        let newScrollPosition = state.scrollPosition + scrollAmount

        // Ensure the new scroll position stays within the valid range
        newScrollPosition = Math.max(minScroll, Math.min(newScrollPosition, maxScroll))

        if ('scrollBehavior' in document.documentElement.style) {
            container.value.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
            state.scrollPosition = newScrollPosition
        } else {
            smoothScrollTo(container.value, newScrollPosition, 300, () => {
                state.scrollPosition = newScrollPosition
            })
        }
    }

    /**
     * Smoothly scroll the element to the specified scroll position
     *
     * @param element - The element to scroll
     * @param scrollLeft - The target scroll position
     * @param duration - The duration of the scroll animation in milliseconds
     * @param callback - Optional callback function to be called after the animation completes
     */
    const smoothScrollTo = (element: HTMLElement, scrollLeft: number, duration: number, callback?: () => void) => {
        const start = element.scrollLeft
        const change = scrollLeft - start
        const increment = 20
        let currentTime = 0

        const animateScroll = () => {
            currentTime += increment
            const easing = easeOutQuad(currentTime, start, change, duration)
            element.scrollLeft = easing
            if (currentTime < duration) {
                setTimeout(animateScroll, increment)
            } else {
                callback?.()
            }
        }

        animateScroll()
    }

    /**
     * Easing function for smooth scrolling animation
     *
     * @param t - Current time
     * @param b - Start value
     * @param c - Change in value
     * @param d - Duration
     * @returns The eased value
     */
    const easeOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d
        return -c * t * (t - 2) + b
    }

    /**
     * Update the container width and scroll position on mounted and window resize
     */
    const updateContainerWidth = () => {
        if (container.value) {
            state.containerWidth = container.value.offsetWidth
            state.maxScrollPosition = container.value.scrollWidth - container.value.clientWidth

            // Recalculate scroll position to stay within the new maximum scroll position
            state.scrollPosition = Math.max(0, Math.min(state.scrollPosition, state.maxScrollPosition))
        }
    }

    onMounted(() => {
        if (props.controls) {
            updateContainerWidth()

            window.addEventListener('resize', updateContainerWidth)
        }
    })

    onBeforeUnmount(() => {
        if (props.controls) {
            window.removeEventListener('resize', updateContainerWidth)
        }
    })

    /**
     * Whether the container can be scrolled to the left
     */
    const canScrollLeft = computed(() => state.scrollPosition > 0 && container.value)

    /**
     * Whether the container can be scrolled to the right
     */
    const canScrollRight = computed(() => state.scrollPosition < state.maxScrollPosition)
</script>
