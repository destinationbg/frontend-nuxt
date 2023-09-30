<template>
    <section class="location-information">
        <div class="container">
            <div class="wrapper">
                <div v-if="data.visiting" class="item">
                    <div class="icon-container">
                        <i class="fi fi-rr-brightness" />
                    </div>

                    <h2>{{ t('page.location.section.seasons.title') }}</h2>

                    <div class="content" v-html="data.visiting.text" />
                    <div v-if="data.visiting.forecast" class="forecast">
                        <p>
                            <strong>{{ t('page.location.section.seasons.actualWeather') }}</strong>
                        </p>
                        <div class="box">
                            <div class="icon-container">
                                <i :class="`fi fi-rr-${data.visiting.forecast.icon}`" />
                            </div>
                            <div class="weather">
                                <strong>{{ temperatureInCelsius(data.visiting.forecast.temperature) }}</strong>
                                <span>{{ data.visiting.forecast.text }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="report">
                        <BaseButton type="button" variant="borderless" :title="t('general.buttons.reportAlternative')">
                            <template #icon-left>
                                <i class="fi fi-rr-exclamation" />
                            </template>
                        </BaseButton>
                    </div>
                </div>
                <div v-if="data.work_time" class="item">
                    <div class="icon-container">
                        <i class="fi fi-rr-briefcase" />
                    </div>

                    <h2>{{ t('page.location.section.workTime.title') }}</h2>

                    <div class="content" v-html="data.work_time" />

                    <div class="report">
                        <BaseButton type="button" variant="borderless" :title="t('general.buttons.reportAlternative')">
                            <template #icon-left>
                                <i class="fi fi-rr-exclamation" />
                            </template>
                        </BaseButton>
                    </div>
                </div>
                <div v-if="data.prices" class="item">
                    <div class="icon-container">
                        <i class="fi fi-rr-coins" />
                    </div>

                    <h2>{{ t('page.location.section.prices.title') }}</h2>

                    <div class="content" v-html="data.prices" />

                    <div class="report">
                        <BaseButton type="button" variant="borderless" :title="t('general.buttons.reportAlternative')">
                            <template #icon-left>
                                <i class="fi fi-rr-exclamation" />
                            </template>
                        </BaseButton>
                    </div>
                </div>
                <div v-if="data.contacts" class="item">
                    <div class="icon-container">
                        <i class="fi fi-rr-phone-call" />
                    </div>

                    <h2>{{ t('page.location.section.contacts.title') }}</h2>

                    <div class="content" v-html="data.contacts" />

                    <div class="report">
                        <BaseButton type="button" variant="borderless" :title="t('general.buttons.reportAlternative')">
                            <template #icon-left>
                                <i class="fi fi-rr-exclamation" />
                            </template>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { temperatureInCelsius } from '@/composables/useTemperature'

    defineProps({
        /**
         * The location information details
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => {}
        }
    })

    const { t } = useI18n()
</script>
