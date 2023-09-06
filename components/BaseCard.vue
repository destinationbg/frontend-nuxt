<template>
    <div v-if="type === 'rectangle-flexible'" class="card rectangle-flexible">
        <NuxtLink :to="localePath(data.url)">
            <h3>
                <span>{{ data.title }}</span>
                <i class="fi fi-rr-arrow-small-right" />
            </h3>
            <BasePicture
                :data="{
                    image: data.image,
                    title: data.title,
                    width: 100,
                    height: 100,
                    decoding: 'async',
                    loading: 'lazy'
                }"
            />
        </NuxtLink>
    </div>
    <div v-else-if="type === 'rectangle-static'" class="card rectangle-static">
        <NuxtLink :to="localePath('/location/' + data.slug)">
            <div class="picture-container">
                <div class="badges">
                    <div v-if="data.user_score" class="stars">
                        <i class="fi fi-rr-star" />
                        <span>{{ data.user_score.toFixed(1) }}</span>
                    </div>

                    <div v-if="data.distance" class="distance">
                        <i class="fi fi-rr-route"></i>
                        <span>{{ useDistance(data.distance) }}</span>
                    </div>
                </div>

                <BasePicture
                    :data="{
                        image: data.image,
                        title: data.title,
                        width: 360,
                        height: 640,
                        decoding: 'async',
                        loading: 'lazy'
                    }"
                />
            </div>

            <div class="details-container">
                <h3>{{ data.title }}</h3>
                <p>
                    <i class="fi fi-rr-marker"></i>
                    <span>{{ data.location }}</span>
                </p>
            </div>
        </NuxtLink>
    </div>
    <div v-else-if="type === 'alternative'" class="card alternative">
        <div class="icon-container">
            <img :src="data.icon" alt="Icon" width="100" height="100" loading="lazy" decoding="async" />
        </div>
        <h3>
            <NuxtLink :to="localePath(data.url)">{{ data.title }}</NuxtLink>
        </h3>
        <p>{{ data.description }}</p>
        <NuxtLink :to="localePath(data.url)" class="learn-more">
            <span>{{ data.button }}</span>
            <i class="fi fi-rr-arrow-small-right" />
        </NuxtLink>
    </div>
    <div v-else class="card default">
        <NuxtLink :to="localePath(data.url)" class="box-link">
            <figure>
                <BasePicture
                    :data="{
                        image: data.image,
                        title: data.title,
                        width: 100,
                        height: 100,
                        decoding: 'async',
                        loading: 'lazy'
                    }"
                />
                <figcaption>
                    <h3>{{ data.title }}</h3>
                </figcaption>
            </figure>
            <div class="corner">
                <i class="fi fi-rr-arrow-small-right" />
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import { useDistance } from '@/composables/useDistance'

    const localePath = useLocalePath()

    defineProps({
        /**
         * The sub-category data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => ({})
        },
        /**
         * If the card has an alternative style
         *
         * @type String
         * @default default
         * @name type
         */
        type: {
            type: String,
            default: 'default',
            validator: (value: string) => {
                return ['default', 'alternative', 'rectangle-flexible', 'rectangle-static'].includes(value)
            }
        }
    })
</script>
