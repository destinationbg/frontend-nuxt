<template>
    <footer class="page-footer">
        <div class="container">
            <div class="top">
                <div class="brand">
                    <NuxtLink :to="localePath('/')" data-text="Beta">
                        <img
                            src="~/assets/images/logo.svg"
                            :alt="domain"
                            width="640"
                            height="360"
                            loading="lazy"
                            decoding="async"
                        />
                        <span>{{ domain }}</span>
                    </NuxtLink>
                </div>
                <p>{{ t('general.footer.mission') }}</p>
                <p>
                    <strong>{{ t('general.footer.socials') }}</strong>
                </p>
                <ul class="socials">
                    <li v-for="(item, index) in socialNetworks" :key="index">
                        <a
                            :href="item.link"
                            :title="item.title"
                            target="_blank"
                            rel="noopener"
                            :class="`social-${item.title.toLowerCase()}`"
                        >
                            <i :class="`fi fi-brands-${item.title.toLowerCase()}`" />
                        </a>
                    </li>
                </ul>
                <p>
                    <NuxtLink :to="localePath('/donate')" :title="t('page.donate.title')" class="link">
                        <strong>{{ t('general.footer.donate') }}</strong>
                    </NuxtLink>
                </p>
            </div>
            <div class="bottom">
                <p v-html="t('general.footer.copyright', { year: currentYear, name: t('meta.appName') })" />
                <div class="links">
                    <ul>
                        <li>
                            <NuxtLink :to="localePath('/about')">
                                {{ t('page.about.title') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('/contacts')">
                                {{ t('page.contacts.title') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('/donate')">
                                {{ t('page.donate.title') }}
                            </NuxtLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NuxtLink :to="localePath('/legal/terms-and-conditions')">
                                {{ t('page.legal.termsAndConditions.title') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('/legal/privacy-policy')">
                                {{ t('page.legal.privacyPolicy.title') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('/legal/cookie-policy')">
                                {{ t('page.legal.cookiePolicy.title') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { socialNetworks } from '@/config/social-networks'

    const { t } = useI18n()
    const localePath = useLocalePath()

    const domain = String(import.meta.env.VITE_APP_DOMAIN)
    const currentYear = new Date().getFullYear()
</script>
