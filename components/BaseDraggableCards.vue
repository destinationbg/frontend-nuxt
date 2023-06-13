<template>
    <div class="sub-categories">
        <div
            ref="container"
            :class="['wrapper', itemsCount > 4 ? 'draggable' : null]"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @contextmenu="onContextMenu"
        >
            <BaseButton
                v-if="itemsCount > 4"
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
                v-if="itemsCount > 4"
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

    defineProps({
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
        }
    })

    const container = ref<HTMLElement | null>(null)
    const state = reactive({
        isDragging: false,
        startX: 0,
        currentX: 0,
        scrollPosition: 0,
        containerWidth: 0
    })

    const onMouseMove = (event: MouseEvent) => {
        if (state.isDragging && container.value) {
            state.currentX = event.pageX - container.value.offsetLeft
            const diff = state.currentX - state.startX
            container.value.scrollLeft = state.scrollPosition - diff
        }
    }

    const onMouseUp = () => {
        state.isDragging = false
        if (container.value) {
            state.scrollPosition = container.value.scrollLeft
        }
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (event: MouseEvent) => {
        if (event.button === 2 || event.target instanceof HTMLAnchorElement) {
            return // Skip if right mouse button is clicked or target is a link
        }
        state.isDragging = true
        state.startX = event.pageX - container.value!.offsetLeft
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    const onTouchMove = (event: TouchEvent) => {
        if (state.isDragging && container.value) {
            state.currentX = event.touches[0].pageX - container.value.offsetLeft
            const diff = state.currentX - state.startX
            container.value.scrollLeft = state.scrollPosition - diff
            // Prevent page scrolling while dragging
            event.preventDefault()
        }
    }

    const onTouchEnd = () => {
        state.isDragging = false
        if (container.value) {
            state.scrollPosition = container.value.scrollLeft
        }
        // Remove touchmove event listeners
        container.value!.removeEventListener('touchmove', onTouchMove)
        document.body.removeEventListener('touchmove', onTouchMove)
    }

    const onTouchStart = (event: TouchEvent) => {
        if (event.target instanceof HTMLAnchorElement) {
            return // Skip if target is a link
        }
        state.isDragging = true
        state.startX = event.touches[0].pageX - container.value!.offsetLeft
        // Prevent page scrolling while dragging
        container.value!.addEventListener('touchmove', onTouchMove)
        document.body.addEventListener('touchmove', onTouchMove, { passive: false })
    }

    const onContextMenu = (event: MouseEvent) => {
        event.preventDefault() // Prevent the context menu from appearing
    }

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

    const easeOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d
        return -c * t * (t - 2) + b
    }

    onMounted(() => {
        if (container.value) {
            state.containerWidth = container.value.offsetWidth
        }
    })

    const canScrollLeft = computed(() => state.scrollPosition > 0 && container.value)
    const canScrollRight = computed(
        () => state.scrollPosition < (container.value?.scrollWidth ?? 0) - (container.value?.clientWidth ?? 0)
    )
</script>
