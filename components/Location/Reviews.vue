<template>
    <section class="location-reviews">
        <div class="container">
            <div class="wrapper">
                <SectionHeading :has-icon="true" :has-description="true" :has-buttons="true" variant="inner-location">
                    <template #icon>
                        <i class="fi fi-rr-map-marker-smile" />
                    </template>
                    <template #title>
                        <h2>{{ t('page.location.section.reviews.title') }}</h2>
                    </template>
                    <template #description>
                        {{ t('page.location.section.reviews.description') }}
                    </template>
                    <template #buttons>
                        <BaseButton type="button" variant="primary" size="small">
                            <template #text>
                                <span>{{ t('general.buttons.writeReview') }}</span>
                            </template>
                        </BaseButton>
                    </template>
                </SectionHeading>

                <div class="statistics">
                    <div class="metrics">
                        <ul>
                            <li v-for="(rating, index) in statistics.metrics" :key="index">
                                <span>{{ rating.score }}</span>

                                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="24" height="20">
                                    <path
                                        fill="#fbbf24"
                                        d="m12 16.2l4.9 3c0.9 0.5 1.9-0.3 1.7-1.3l-1.3-5.5 4.3-3.7c0.8-0.7 0.3-2-0.7-2.1l-5.6-0.4-2.2-5.3c-0.4-0.9-1.8-0.9-2.2 0l-2.2 5.2-5.6 0.5c-1 0.1-1.5 1.4-0.7 2.1l4.3 3.7-1.3 5.5c-0.2 1 0.9 1.8 1.7 1.3z"
                                    />
                                </svg>

                                <div
                                    class="bar"
                                    :title="`${t('general.rating.total', {
                                        reviews: rating.reviews.toLocaleString(locale, {
                                            minimumFractionDigits: 0
                                        })
                                    })} (${((rating.reviews / statistics.total_reviews) * 100).toFixed(0)}%)`"
                                    :style="`width: ${((rating.reviews / statistics.total_reviews) * 100).toFixed(0)}%`"
                                />
                            </li>
                        </ul>
                    </div>
                    <div class="overall-score">
                        <BaseRating size="big-vertical" :rating="statistics.score" :max-rating="5">
                            <template #prefix>
                                <div class="number">{{ Number(statistics.score).toFixed(1) }}</div>
                            </template>
                            <template #suffix>
                                <div class="reviews">
                                    {{
                                        t('general.rating.total', {
                                            reviews: statistics.total_reviews.toLocaleString(locale, { minimumFractionDigits: 0 })
                                        })
                                    }}
                                </div>
                            </template>
                        </BaseRating>
                    </div>
                </div>

                <div class="list">
                    <div v-for="(item, index) in data" :key="index" class="item">
                        <div class="author">
                            <picture>
                                <img
                                    :src="item.author.photo"
                                    :alt="item.author.names"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div class="info">
                                <div class="names">{{ item.author.names }}</div>
                                <BaseRating size="small" :rating="item.rating" :max-rating="5" />
                            </div>
                        </div>
                        <div class="content">
                            <BaseTruncateComment :id="item.id" :comment="item.comment" />
                        </div>
                        <div class="footer">
                            <time>
                                {{ useDateFormatter(item.date_added, locale) }}
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { useDateFormatter } from '@/composables/useDateFormatter'

    defineProps({
        /**
         * The review data
         *
         * @type Array
         * @default []
         * @name data
         */
        data: {
            type: Array,
            default: () => []
        },
        /**
         * The review statistics
         *
         * @type Object
         * @default []
         * @name statistics
         */
        statistics: {
            type: Object,
            default: () => {}
        }
    })

    const { t, locale } = useI18n()
</script>
