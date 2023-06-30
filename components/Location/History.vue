<template>
    <section ref="sectionRef" class="location-history">
        <div class="container">
            <div class="content" v-html="truncatedContent" />

            <BaseButton v-if="showButton" type="button" variant="primary" size="small" @click="toggleContent">
                <template #text>
                    <span>{{ showFullContent ? t('general.buttons.showLess') : t('general.buttons.showMore') }}</span>
                </template>
            </BaseButton>
        </div>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps({
        /**
         * The location content
         *
         * @type String
         * @default
         * @name content
         */
        content: {
            type: String,
            required: true
        }
    })

    const { t } = useI18n()
    const sectionRef = ref(null)
    const showFullContent = ref(false)

    const truncatedContent = computed(() => {
        const moreIndex = props.content.indexOf('<!-- more -->')

        if (showFullContent.value) {
            return props.content
        } else {
            return moreIndex !== -1 ? props.content.slice(0, moreIndex) : props.content
        }
    })

    const showButton = computed(() => props.content.includes('<!-- more -->'))

    const toggleContent = () => {
        showFullContent.value = !showFullContent.value

        const offset = 150
        const targetPosition = sectionRef.value.getBoundingClientRect().top + window.pageYOffset - offset

        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }, 150)
    }

    onKeyStroke('Escape', () => {
        if (showFullContent.value) showFullContent.value = false
    })
</script>
