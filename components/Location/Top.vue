<template>
    <section class="location-top">
        <div class="container">
            <div class="wrapper">
                <div class="information">
                    <div class="navigation">
                        <ul class="breadcrumbs">
                            <li v-for="(page, index) in data.breadcrumbs" :key="index">
                                <NuxtLink :to="localePath(page.url)">
                                    {{ page.name }}
                                </NuxtLink>
                            </li>
                        </ul>

                        <ul class="controls">
                            <li>
                                <BaseButton type="button" variant="borderless">
                                    <template #icon-left>
                                        <i class="fi fi-rr-share" />
                                    </template>
                                    <template #text>
                                        <span>{{ t('general.buttons.share') }}</span>
                                    </template>
                                </BaseButton>
                            </li>
                            <li>
                                <BaseButton type="button" variant="borderless">
                                    <template #icon-left>
                                        <i class="fi fi-rr-book-bookmark" />
                                    </template>
                                    <template #text>
                                        <span>{{ t('general.buttons.bookmarkAddShort') }}</span>
                                    </template>
                                </BaseButton>
                            </li>
                        </ul>
                    </div>

                    <h1>{{ data.title }}</h1>
                    <p>{{ data.short_description }}</p>

                    <div class="details">
                        <BaseRating size="big" :rating="data.details.rating.score" :max-rating="5">
                            <template #suffix>
                                <div class="reviews">
                                    {{
                                        t('general.rating.reviews', {
                                            rating: Number(data.details.rating.score).toFixed(1),
                                            reviews: data.details.rating.total_reviews.toLocaleString(locale, {
                                                minimumFractionDigits: 0
                                            })
                                        })
                                    }}
                                </div>
                            </template>
                        </BaseRating>

                        <div class="locality">
                            <i class="fi fi-rr-marker" />
                            <span>
                                {{
                                    data.details.locality_prefix
                                        ? t('general.localityWithPrefix', { locality: data.details.locality })
                                        : data.details.locality
                                }}
                            </span>
                        </div>

                        <div class="altitude">
                            <i class="fi fi-rr-mountains" />
                            <span>
                                {{
                                    t('general.altitude', {
                                        meters: data.details.altitude.toLocaleString(locale, {
                                            minimumFractionDigits: 0
                                        })
                                    })
                                }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="photo">
                    <div class="photo-holder">
                        <BaseButton type="button" size="small" variant="primary" color="gray">
                            <template #icon-left>
                                <i class="fi fi-rr-picture" />
                            </template>
                            <template #text>
                                <span>{{ t('general.buttons.photosAll') }}</span>
                            </template>
                        </BaseButton>

                        <div class="bookmark-button">
                            <BaseButton type="button" size="small" variant="borderless" :title="t('general.buttons.favoriteAdd')">
                                <template #icon-left>
                                    <i class="fi fi-rr-heart" />
                                </template>
                            </BaseButton>
                        </div>

                        <figure @click="openPhotoModal">
                            <BasePicture
                                :data="{
                                    image: data.details.photo.default,
                                    title: data.title,
                                    width: 640,
                                    height: 360,
                                    decoding: 'async'
                                }"
                            >
                                <template #source>
                                    <source
                                        v-for="(alternativeImage, imageIndex) in data.details.photo.formats"
                                        :key="imageIndex"
                                        :srcset="alternativeImage.image"
                                        :type="`image/${alternativeImage.type}`"
                                    />
                                </template>
                            </BasePicture>
                            <figcaption>
                                {{ t('general.photographer', { author: data.details.photo.author.names }) }}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { useModalStore } from '@/stores/ModalStore'

    const props = defineProps({
        /**
         * The top section data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => ({})
        }
    })

    const { t, locale } = useI18n()
    const localePath = useLocalePath()
    const modalStore = useModalStore()

    const openPhotoModal = () => {
        modalStore.setPhotoVisibility(true)
        modalStore.setPhotoData({
            encoded: props.data.details.photo.encoded,
            author: {
                names: props.data.details.photo.author.names,
                avatar: props.data.details.photo.author.avatar
            },
            place: {
                slug: props.data.slug,
                title: props.data.title
            },
            sizes: {
                width: props.data.details.photo.sizes.width,
                height: props.data.details.photo.sizes.height
            },
            date: props.data.details.photo.date,
            coordinates: {
                latitude: props.data.details.coordinates.latitude,
                longitude: props.data.details.coordinates.longitude
            }
        })
    }
</script>
