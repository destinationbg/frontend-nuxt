<template>
    <section class="location-top">
        <div class="container">
            <div class="wrapper">
                <div class="information">
                    <div class="navigation">
                        <ul class="breadcrumbs">
                            <li v-for="(page, index) in breadcrumbs" :key="index">
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

                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>

                    <div class="details">
                        <BaseRating size="big" :rating="details.rating.score" :max-rating="5">
                            <template #suffix>
                                <div class="reviews">
                                    {{
                                        t('general.rating.reviews', {
                                            rating: details.rating.score,
                                            reviews: details.rating.total_reviews.toLocaleString(locale, {
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
                                    details.locality_prefix
                                        ? t('general.localityWithPrefix', { locality: details.locality })
                                        : details.locality
                                }}
                            </span>
                        </div>

                        <div class="altitude">
                            <i class="fi fi-rr-mountains" />
                            <span>{{ t('general.altitude', { meters: details.altitude }) }}</span>
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

                        <figure>
                            <picture>
                                <source v-for="(image, index) in details.photo.formats" :key="index" :srcset="image" />
                                <img :src="details.photo.default" :alt="title" width="640" height="360" decoding="async" />
                            </picture>
                            <figcaption>
                                {{ t('general.photographer', { author: details.photo.author }) }}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { t, locale } = useI18n()
    const localePath = useLocalePath()

    defineProps({
        /**
         * The top section heading title
         *
         * @type String
         * @default
         * @name title
         */
        title: {
            type: String,
            default: null
        },
        /**
         * The top section description
         *
         * @type String
         * @default
         * @name description
         */
        description: {
            type: String,
            default: null
        },
        /**
         * The top section breadcrumbs
         *
         * @type Array
         * @default []
         * @name breadcrumbs
         */
        breadcrumbs: {
            type: Array,
            default: null
        },
        /**
         * The top section details
         *
         * @type Object
         * @default {}
         * @name details
         */
        details: {
            type: Object,
            default: () => ({})
        }
    })
</script>
