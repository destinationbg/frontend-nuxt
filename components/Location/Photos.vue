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

                <BaseDraggableCards v-if="data.photos.length" class="gallery">
                    <template v-for="item in transformedData" :key="item">
                        <div v-if="Array.isArray(item)" class="group">
                            <div v-for="(groupItem, groupIndex) in item" :key="groupIndex" class="photo" @click="openPhotoModal">
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
                        <div v-else class="photo" @click="openPhotoModal">
                            <picture>
                                <source
                                    v-for="(alternativeImage, imageIndex) in item.formats"
                                    :key="imageIndex"
                                    :srcset="alternativeImage.image"
                                    :type="`image/${alternativeImage.type}`"
                                />
                                <img
                                    :src="item.default"
                                    :alt="`${data.title} - ${item.author}`"
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
    import { useModalStore } from '@/stores/ModalStore'
    import { IPhoto, transformDataToPhotoData } from '@/utils/photoUtils'

    const props = defineProps({
        /**
         * The location data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object as () => IPhoto,
            default: () => ({})
        }
    })

    const { t } = useI18n()
    const modalStore = useModalStore()

    const transformedData = computed(() => {
        const { photos } = props.data
        const transformed = []

        for (let i = 0; i < photos.length; i += 5) {
            const item = photos[i]
            const remainingItems = photos.slice(i + 1)

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

    const openPhotoModal = () => {
        modalStore.setPhotoVisibility(true)
        modalStore.setPhotoData(transformDataToPhotoData(props.data))
    }
</script>
