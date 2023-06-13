<template>
    <div class="card">
        <NuxtLink :to="localePath(data.url)">
            <figure>
                <picture>
                    <img :src="data.image" :alt="data.title" width="100" height="100" loading="lazy" decoding="async" />
                </picture>
                <figcaption>
                    <span>{{ data.title }}</span>
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
         * @default
         * @name data
         */
        data: {
            type: Object,
            default: null
        }
    })
</script>
