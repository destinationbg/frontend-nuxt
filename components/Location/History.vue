<template>
    <section ref="sectionRef" class="location-history">
        <div class="container">
            <div class="wrapper">
                <div class="content" v-html="truncatedContent" />

                <BaseButton v-if="showButton" type="button" variant="primary" size="small" @click="toggleContent">
                    <template #text>
                        <span>{{ showFullContent ? t('general.buttons.showLess') : t('general.buttons.showMore') }}</span>
                    </template>
                </BaseButton>

                <div class="footer">
                    <div class="authors">
                        <p>{{ $t('page.location.content.authors', data.authors.length) }}</p>
                        <ul :class="data.authors.length >= 5 ? 'multiple' : null">
                            <li v-for="(author, index) in data.authors" :key="index" :title="author.names">
                                <picture>
                                    <img
                                        :src="author.photo"
                                        :alt="author.names"
                                        width="100"
                                        height="100"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                                <span v-if="data.authors.length < 5">
                                    {{ author.names }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="contribute">
                        <p
                            v-html="
                                $t('page.location.content.contribute', {
                                    location: data.title,
                                    repositoryUrl,
                                    contributingUrl
                                })
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps({
        /**
         * The location data
         *
         * @type Object
         * @default
         * @name data
         */
        data: {
            type: Object,
            default: () => {}
        }
    })

    const { t } = useI18n()
    const sectionRef = ref(null)
    const repositoryUrl = `https://github.com/${import.meta.env.VITE_GITHUB_ORGANIZATION}/${
        import.meta.env.VITE_GITHUB_REPO_CONTENTS
    }/tree/main/6.locations/${props.data.slug}`
    const contributingUrl = `https://github.com/${import.meta.env.VITE_GITHUB_ORGANIZATION}/${
        import.meta.env.VITE_GITHUB_REPO_CONTENTS
    }/blob/main/.github/CONTRIBUTING.md`
    const showFullContent = ref(false)

    const truncatedContent = computed(() => {
        const { replaceLinks } = useContentLinkHandler()
        const replacedContent = replaceLinks(props.data.content)

        if (replacedContent.includes('<!-- more -->')) {
            const moreIndex = replacedContent.indexOf('<!-- more -->')

            if (!showFullContent.value) {
                return moreIndex !== -1 ? replacedContent.slice(0, moreIndex) : replacedContent
            }
        }

        return replacedContent
    })

    const showButton = computed(() => props.data.content.includes('<!-- more -->'))

    const toggleContent = () => {
        const offset = 150
        const targetPosition = sectionRef.value.getBoundingClientRect().top + window.pageYOffset - offset

        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }, 150)

        showFullContent.value = !showFullContent.value
    }

    onKeyStroke('Escape', () => {
        if (showFullContent.value) showFullContent.value = false
    })
</script>
