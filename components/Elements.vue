<template>
    <section class="demo">
        <div class="container">
            <div class="buttons">
                <div class="group">
                    <BaseButton type="button" size="big" variant="primary">
                        <template #icon-left>
                            <i class="fi fi-rr-heart" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.favoriteAdd') }}</span>
                        </template>
                    </BaseButton>

                    <BaseButton type="button" size="small" variant="primary">
                        <template #icon-left>
                            <i class="fi fi-rr-heart" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.favoriteAdd') }}</span>
                        </template>
                    </BaseButton>
                </div>

                <div class="group">
                    <BaseButton type="button" size="big" variant="primary" color="green">
                        <template #icon-left>
                            <i class="fi fi-rr-shopping-cart-add" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.photoPurchase') }}</span>
                        </template>
                    </BaseButton>

                    <BaseButton type="button" size="small" variant="primary" color="green">
                        <template #icon-left>
                            <i class="fi fi-rr-shopping-cart-add" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.photoPurchase') }}</span>
                        </template>
                    </BaseButton>
                </div>

                <div class="group">
                    <BaseButton type="button" size="big" variant="primary" color="gray">
                        <template #icon-left>
                            <i class="fi fi-rr-picture" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.photosAll') }}</span>
                        </template>
                    </BaseButton>

                    <BaseButton type="button" size="small" variant="primary" color="gray">
                        <template #icon-left>
                            <i class="fi fi-rr-picture" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.photosAll') }}</span>
                        </template>
                    </BaseButton>
                </div>

                <div class="group">
                    <BaseButton type="button" size="big" variant="secondary">
                        <template #icon-left>
                            <i class="fi fi-rr-arrow-alt-left" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.back') }}</span>
                        </template>
                    </BaseButton>

                    <BaseButton type="button" size="small" variant="secondary">
                        <template #icon-left>
                            <i class="fi fi-rr-arrow-alt-left" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.back') }}</span>
                        </template>
                    </BaseButton>
                </div>

                <div class="group">
                    <BaseButton type="button" variant="borderless">
                        <template #icon-left>
                            <i class="fi fi-rr-share" />
                        </template>
                        <template #text>
                            <span>{{ t('general.buttons.share') }}</span>
                        </template>
                    </BaseButton>
                </div>

                <div class="group">
                    <div class="button-group">
                        <BaseButton
                            type="button"
                            size="big"
                            variant="secondary"
                            :title="t('general.buttons.viewAsList')"
                            disabled
                        >
                            <template #icon-left>
                                <i class="fi fi-rr-menu-burger" />
                            </template>
                        </BaseButton>

                        <BaseButton type="button" size="big" variant="secondary" :title="t('general.buttons.viewAsGrid')">
                            <template #icon-left>
                                <i class="fi fi-rr-apps" />
                            </template>
                        </BaseButton>

                        <BaseButton type="button" size="big" variant="secondary" :title="t('general.buttons.viewAsMap')">
                            <template #icon-left>
                                <i class="fi fi-rr-map" />
                            </template>
                        </BaseButton>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <BaseButton type="button" size="big" variant="secondary" :title="t('general.buttons.backLabel')" disabled>
                    <template #icon-left>
                        <i class="fi fi-rr-arrow-alt-left" />
                    </template>
                    <template #text>
                        <span>{{ t('general.buttons.back') }}</span>
                    </template>
                </BaseButton>

                <div class="pages-container">
                    <BaseButton type="button" size="big" variant="secondary" disabled>
                        <template #text>
                            <span>1</span>
                        </template>
                    </BaseButton>

                    <div class="divider">...</div>

                    <BaseButton v-for="(item, index) in [3, 4, 5]" :key="index" type="button" size="big" variant="secondary">
                        <template #text>
                            <span>{{ item }}</span>
                        </template>
                    </BaseButton>

                    <div class="divider">...</div>

                    <BaseButton type="button" size="big" variant="secondary">
                        <template #text>
                            <span>7</span>
                        </template>
                    </BaseButton>
                </div>

                <BaseButton type="button" size="big" variant="secondary" :title="t('general.buttons.nextLabel')" disabled>
                    <template #text>
                        <span>{{ t('general.buttons.next') }}</span>
                    </template>
                    <template #icon-right>
                        <i class="fi fi-rr-arrow-alt-right" />
                    </template>
                </BaseButton>
            </div>

            <div class="ratings">
                <BaseRating size="big" :rating="3.5" :max-rating="5" />

                <BaseRating size="small" :rating="2.3" :max-rating="5" />

                <BaseRating size="big" :rating="4.1" :max-rating="5">
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
                </BaseRating>

                <BaseRating size="big-vertical" :rating="4.1" :max-rating="5">
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
                </BaseRating>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { t, locale } = useI18n()
</script>
