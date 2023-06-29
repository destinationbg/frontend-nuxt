<template>
    <div v-if="type === 'rectangle'" class="card rectangle">
        <NuxtLink :to="localePath(data.url)">
            <h3>
                <span>{{ data.title }}</span>
                <i class="fi fi-rr-arrow-small-right" />
            </h3>
            <picture>
                <img :src="data.image" :alt="data.title" width="100" height="100" loading="lazy" decoding="async" />
            </picture>
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
                <picture>
                    <img :src="data.image" :alt="data.title" width="100" height="100" loading="lazy" decoding="async" />
                </picture>
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
                return ['default', 'alternative', 'rectangle'].includes(value)
            }
        }
    })
</script>
