<template>
    <section class="top-section">
        <div class="container">
            <div class="wrapper">
                <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>

                <h1>{{ title }}</h1>
                <p v-if="description">{{ description }}</p>

                <ul v-if="breadcrumbs.length" class="breadcrumbs">
                    <li v-for="(page, index) in breadcrumbs" :key="index">
                        <NuxtLink :to="localePath(page.url)">
                            {{ page.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
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
            default: () => []
        }
    })
</script>
