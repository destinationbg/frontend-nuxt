<template>
    <section class="location-photos">
        <div class="container">
            <div class="wrapper">
                <SectionHeading :has-icon="true" :has-description="true" :has-buttons="true" variant="inner-location">
                    <template #icon>
                        <i class="fi fi-rr-graphic-style" />
                    </template>
                    <template #title>
                        <h2>{{ t('page.location.section.photos.title') }}</h2>
                    </template>
                    <template #description>
                        {{ t('page.location.section.photos.description') }}
                    </template>
                    <template #buttons>
                        <BaseButton type="button" variant="primary" size="small">
                            <template #text>
                                <span>{{ t('general.buttons.uploadPhoto') }}</span>
                            </template>
                        </BaseButton>
                    </template>
                </SectionHeading>

                <BaseDraggableCards v-if="data.length" class="gallery">
                    <template v-for="item in transformedData" :key="item">
                        <div v-if="Array.isArray(item)" class="group">
                            <div v-for="(groupItem, groupIndex) in item" :key="groupIndex" class="photo">
                                <picture>
                                    <source
                                        v-for="(alternativeGroupImage, alternativeGroupIndex) in groupItem.formats || []"
                                        :key="alternativeGroupIndex"
                                        :srcset="alternativeGroupImage.image"
                                        :type="`image/${alternativeGroupImage.type}`"
                                    />
                                    <img
                                        :src="groupItem.default"
                                        :alt="groupItem.author"
                                        width="640"
                                        height="360"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div v-else class="photo">
                            <picture>
                                <source
                                    v-for="(alternativeImage, imageIndex) in item.formats"
                                    :key="imageIndex"
                                    :srcset="alternativeImage.image"
                                    :type="`image/${alternativeImage.type}`"
                                />
                                <img
                                    :src="item.default"
                                    :alt="`${location} - ${item.author}`"
                                    width="640"
                                    height="360"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </template>
                </BaseDraggableCards>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps({
        /**
         * The location title
         *
         * @type String
         * @default null
         * @name location
         */
        location: {
            type: String,
            default: null
        },
        /**
         * The location photos
         *
         * @type Array
         * @default []
         * @name data
         */
        data: {
            type: Array,
            default: () => []
        }
    })

    const { t } = useI18n()

    /**
     * Computed property to transform the location data into "1 single photo + group of 4 photos"
     */
    const transformedData = computed(() => {
        const transformed = []

        for (let i = 0; i < props.data.length; i += 5) {
            const item = props.data[i]
            const remainingItems = props.data.slice(i + 1)

            if (remainingItems.length >= 4) {
                const group = remainingItems.slice(0, 4)

                transformed.push(item)
                transformed.push(group)
            } else {
                transformed.push(item)
                transformed.push(...remainingItems)

                break
            }
        }

        return transformed
    })
</script>
