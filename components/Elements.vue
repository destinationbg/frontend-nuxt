<template>
    <section class="demo">
        <div class="container">
            <div class="section-headings">
                <SectionHeading :has-description="true" variant="main-category">
                    <template #title>Почивка и отдих</template>
                    <template #description>
                        Няма значение какво търсите и дали пътувате с приятели, със семейството си или просто обичате времето,
                        прекарано сами със себе си или с любовта на живота Ви. България има какво да предложи на всеки един от
                        вас.
                    </template>
                </SectionHeading>

                <SectionHeading :has-icon="true" :has-description="true" variant="sub-category">
                    <template #icon>
                        <img
                            src="~/assets/images/icons/family.svg"
                            alt="Family icon"
                            width="100"
                            height="100"
                            loading="lazy"
                            decoding="async"
                        />
                    </template>
                    <template #title>Семейни приключения</template>
                    <template #description>
                        За тези, които обичат да пътуват с цялото си семейство, България предлага безброй вълнуващи приключения за
                        малки и големи - от градски паркове до изследване на красивата природа на планините и морето.
                    </template>
                </SectionHeading>

                <SectionHeading :has-description="true" :has-links="true" variant="inner-sub-category">
                    <template #title>Зоологически градини</template>
                    <template #description>
                        България има няколко зоологически градини, където семействата могат да се насладят на видове животни от
                        цял свят. Посетителите могат да видят различни видове животни, като лъвове, слонове, зебри и много други.
                    </template>
                    <template #links>
                        <a href="#">
                            <span>Вижте всички локации</span>
                            <i class="fi fi-rr-arrow-small-right" />
                        </a>
                    </template>
                </SectionHeading>

                <SectionHeading :has-icon="true" :has-description="true" :has-buttons="true" variant="inner-location">
                    <template #icon>
                        <i class="fi fi-rr-graphic-style" />
                    </template>
                    <template #title>Снимки</template>
                    <template #description>
                        Разгледайте списък със снимки на тази локация от други хора, за да се насладите на нейната красота и да се
                        запознаете с различните ѝ аспекти.
                    </template>
                    <template #buttons>
                        <BaseButton type="button" size="small" variant="primary">
                            <template #text>
                                <span>Качване на снимки</span>
                            </template>
                        </BaseButton>
                    </template>
                </SectionHeading>
            </div>

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
