<template>
    <header class="page-header">
        <div class="container">
            <div class="brand">
                <NuxtLink :to="localePath('/')" data-text="Beta">
                    <img src="~/assets/images/logo.svg" :alt="domain" width="640" height="360" />
                    <span>{{ domain }}</span>
                </NuxtLink>
            </div>

            <nav class="navigation">
                <ul class="menu">
                    <li>
                        <NuxtLink :to="localePath('/explore')">
                            <span>{{ t('page.explore.title') }}</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/map')">
                            <span>{{ t('page.map.title') }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <aside>
                <ul>
                    <li
                        v-for="(button, index) in asideButtons"
                        :key="index"
                        :class="button.type === 'divider' ? 'divider' : null"
                    >
                        <button
                            v-if="button.type === 'button'"
                            type="button"
                            :class="button.class ? button.class : null"
                            :title="t(`general.buttons.${button.name}`)"
                        >
                            <i :class="`fi ${button.icon}`" />
                        </button>
                    </li>
                </ul>
            </aside>
        </div>

        <div class="bg-blur" :style="{ opacity }" />

        <div v-if="['local'].includes(environment)" class="environment local">
            <span>{{ t('general.environment.local') }}</span>
        </div>

        <div v-if="['staging'].includes(environment)" class="environment dev">
            <span>{{ t('general.environment.dev') }}</span>
        </div>
    </header>
</template>

<script setup lang="ts">
    const { t } = useI18n()
    const localePath = useLocalePath()

    const domain = String(import.meta.env.VITE_APP_DOMAIN)
    const environment = String(import.meta.env.VITE_APP_ENV)
    const opacity = ref(0)

    const asideButtons = [
        {
            type: 'button',
            name: 'search',
            icon: 'fi-rr-search'
        },
        {
            type: 'button',
            name: 'bookmarks',
            icon: 'fi-rr-bookmark'
        },
        // {
        //     type: 'button',
        //     name: 'location',
        //     icon: 'fi-rr-location-crosshairs',
        //     class: 'location-sharing'
        // },
        {
            type: 'divider'
        },
        {
            type: 'button',
            name: 'menu',
            icon: 'fi-rr-menu-burger'
        }
    ]

    const handleScroll = () => {
        if (window.pageYOffset > 0) opacity.value = 1
        else opacity.value = 0
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })
</script>
