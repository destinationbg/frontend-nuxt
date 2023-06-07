<template>
    <section class="demo">
        <div class="container">
            <div class="buttons">
                <div class="group">
                    <button class="button primary big">
                        <i class="fi fi-rr-heart" />
                        <span>{{ t('general.buttons.favoriteAdd') }}</span>
                    </button>

                    <button class="button primary small">
                        <i class="fi fi-rr-heart" />
                        <span>{{ t('general.buttons.favoriteAdd') }}</span>
                    </button>
                </div>

                <div class="group">
                    <button class="button primary green big">
                        <i class="fi fi-rr-shopping-cart-add" />
                        <span>{{ t('general.buttons.photoPurchase') }}</span>
                    </button>

                    <button class="button primary green small">
                        <i class="fi fi-rr-shopping-cart-add" />
                        <span>{{ t('general.buttons.photoPurchase') }}</span>
                    </button>
                </div>

                <div class="group">
                    <button class="button primary gray big">
                        <i class="fi fi-rr-picture" />
                        <span>{{ t('general.buttons.photosAll') }}</span>
                    </button>

                    <button class="button primary gray small">
                        <i class="fi fi-rr-picture" />
                        <span>{{ t('general.buttons.photosAll') }}</span>
                    </button>
                </div>

                <div class="group">
                    <button class="button secondary big">
                        <i class="fi fi-rr-arrow-alt-left" />
                        <span>{{ t('general.buttons.back') }}</span>
                    </button>

                    <button class="button secondary small">
                        <i class="fi fi-rr-arrow-alt-left" />
                        <span>{{ t('general.buttons.back') }}</span>
                    </button>
                </div>

                <div class="group">
                    <button class="button borderless">
                        <i class="fi fi-rr-share" />
                        <span>{{ t('general.buttons.share') }}</span>
                    </button>
                </div>

                <div class="group">
                    <div class="button-group">
                        <button
                            class="button secondary big disabled"
                            :title="t('general.buttons.viewAsList')"
                            :area-label="t('general.buttons.viewAsList')"
                            disabled
                        >
                            <i class="fi fi-rr-menu-burger" />
                        </button>
                        <button
                            class="button secondary big"
                            :title="t('general.buttons.viewAsGrid')"
                            :area-label="t('general.buttons.viewAsGrid')"
                        >
                            <i class="fi fi-rr-apps" />
                        </button>
                        <button
                            class="button secondary big"
                            :title="t('general.buttons.viewAsMap')"
                            :area-label="t('general.buttons.viewAsMap')"
                        >
                            <i class="fi fi-rr-map" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <button
                    class="button secondary big disabled"
                    :title="t('general.buttons.backLabel')"
                    :area-label="t('general.buttons.backLabel')"
                    disabled
                >
                    <i class="fi fi-rr-arrow-alt-left" />
                    <span>{{ t('general.buttons.back') }}</span>
                </button>

                <div class="pages-container">
                    <div>
                        <button class="button secondary big disabled" disabled>
                            <span>1</span>
                        </button>
                    </div>

                    <div class="divider">...</div>

                    <div v-for="(item, index) in [3, 4, 5]" :key="index">
                        <button class="button secondary big">
                            <span>{{ item }}</span>
                        </button>
                    </div>

                    <div class="divider">...</div>

                    <div>
                        <button class="button secondary big">
                            <span>7</span>
                        </button>
                    </div>
                </div>

                <button
                    class="button secondary big"
                    :title="t('general.buttons.nextLabel')"
                    :area-label="t('general.buttons.nextLabel')"
                >
                    <span>{{ t('general.buttons.next') }}</span>
                    <i class="fi fi-rr-arrow-alt-right" />
                </button>
            </div>

            <div class="rating">
                <Rating size="big" :rating="3.5" :max-rating="5" />

                <Rating size="small" :rating="2.3" :max-rating="5" />

                <Rating size="big" :rating="4.1" :max-rating="5">
                    <template #suffix>
                        <div class="reviews">
                            {{
                                t('general.rating.reviews', {
                                    rating: 4.1,
                                    reviews: (12345).toLocaleString(locale, { minimumFractionDigits: 0 })
                                })
                            }}
                        </div>
                    </template>
                </Rating>

                <Rating size="big-vertical" :rating="4.1" :max-rating="5">
                    <template #prefix>
                        <div class="number">4.1</div>
                    </template>
                    <template #suffix>
                        <div class="reviews">
                            {{
                                t('general.rating.reviews', {
                                    rating: 4.1,
                                    reviews: (12345).toLocaleString(locale, { minimumFractionDigits: 0 })
                                })
                            }}
                        </div>
                    </template>
                </Rating>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { t, locale } = useI18n()
</script>
