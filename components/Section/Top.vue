<template>
    <section :class="['top-section', variant]">
        <div class="container">
            <div v-if="variant === null">
                <div class="wrapper">
                    <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
                    <h1>{{ title }}</h1>
                    <p v-if="description">{{ description }}</p>
                </div>
            </div>
            <div v-else>
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
                        <div class="descriptions">
                            <h1>{{ title }}</h1>
                            <p>{{ description }}</p>
                        </div>
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
                        <BaseButton type="button" size="small" variant="primary" color="gray">
                            <template #icon-left>
                                <i class="fi fi-rr-picture" />
                            </template>
                            <template #text>
                                <span>{{ t('general.buttons.photosAll') }}</span>
                            </template>
                        </BaseButton>

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
    const { t } = useI18n()
    const localePath = useLocalePath()

    defineProps({
        /**
         * The top section variant
         *
         * @type String
         * @default
         * @name variant
         */
        variant: {
            type: String,
            default: null,
            validator: (value: string) => {
                return [null, 'location-view'].includes(value)
            }
        },
        /**
         * The slug of the location
         *
         * @type String
         * @default
         * @name slug
         */
        slug: {
            type: String,
            default: null
        },
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
         * The top section subtitle
         *
         * @type String
         * @default
         * @name subtitle
         */
        subtitle: {
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
            default: null
        }
    })
</script>
