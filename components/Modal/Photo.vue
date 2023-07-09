<template>
    <div class="modal-photo">
        <div ref="photoContainer" class="photo-container">
            <div ref="photoEl" class="photo" :style="{ paddingBottom: aspectRatioPercentage + '%' }"></div>
        </div>
        <div class="details-container">
            <div class="container">
                <div class="wrapper">
                    <div class="heading">
                        <div class="author">
                            <picture>
                                <img :src="`${photoDetails.author.avatar}?size=40`" :alt="photoDetails.author.names" />
                            </picture>
                            <strong>{{ photoDetails.author.names }}</strong>
                        </div>
                        <ul>
                            <li>
                                <BaseButton type="button" size="small">
                                    <template #icon-left>
                                        <i class="fi fi-rr-heart" />
                                    </template>
                                    <template #text>
                                        <span>{{ t('general.buttons.favoriteAdd') }}</span>
                                    </template>
                                </BaseButton>
                            </li>
                            <li>
                                <BaseButton type="button" color="green" size="small">
                                    <template #icon-left>
                                        <i class="fi fi-rr-shopping-cart-add" />
                                    </template>
                                    <template #text>
                                        <span>{{ t('general.buttons.photoPurchase') }}</span>
                                    </template>
                                </BaseButton>
                            </li>
                        </ul>
                    </div>

                    <div class="details">
                        <div class="information">
                            <div class="title">
                                <i class="fi fi-rr-file-circle-info" />
                                <span>{{ t('general.modal.information') }}</span>
                            </div>
                            <ul>
                                <li v-if="photoDetails.place">
                                    <div class="label">{{ t('general.modal.locationCaptured') }}</div>
                                    <span class="description">
                                        <NuxtLink :to="localePath(`/location/${photoDetails.place.slug}`)">
                                            {{ photoDetails.place.title }}
                                        </NuxtLink>
                                    </span>
                                </li>
                                <li v-if="photoDetails.sizes">
                                    <div class="label">{{ t('general.modal.sizes') }}</div>
                                    <span class="description">
                                        {{ photoDetails.sizes.width }} x {{ photoDetails.sizes.height }}
                                    </span>
                                </li>
                                <li v-if="photoDetails.date">
                                    <div class="label">{{ t('general.modal.dateUploaded') }}</div>
                                    <span class="description">{{ d(new Date(photoDetails.date), 'long', locale) }}</span>
                                </li>
                                <li v-if="photoDetails.coordinates">
                                    <div class="label">{{ t('general.modal.coordinates') }}</div>
                                    <span class="description">
                                        <span>
                                            {{
                                                useCoordinates(
                                                    photoDetails.coordinates.latitude,
                                                    photoDetails.coordinates.longitude,
                                                    coordinateType
                                                )
                                            }}
                                        </span>
                                        <BaseButton
                                            type="button"
                                            variant="borderless"
                                            :title="t('general.buttons.change')"
                                            @click="toggleCoordinateType"
                                        >
                                            <template #icon-left>
                                                <i class="fi fi-rr-replace" />
                                            </template>
                                        </BaseButton>
                                        <BaseButton
                                            type="button"
                                            variant="borderless"
                                            :title="t('general.buttons.copy')"
                                            @click="copyCoordinates"
                                        >
                                            <template #icon-left>
                                                <i class="fi fi-rr-copy-alt" />
                                            </template>
                                        </BaseButton>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="photoDetails.place && photoDetails.coordinates" class="snapshot">
                            <img
                                :src="`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson(%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${photoDetails.coordinates.longitude}%2C${photoDetails.coordinates.latitude}%5D%7D%7D%5D%7D)/${photoDetails.coordinates.longitude},${photoDetails.coordinates.latitude},17.1,0/200x126?access_token=${mapBoxToken}`"
                                :alt="photoDetails.place.title"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useModalStore } from '@/stores/ModalStore'
    import { useCoordinates } from '@/composables/useCoordinates'

    const { d, t, locale } = useI18n()
    const localePath = useLocalePath()
    const modalStore = useModalStore()

    const mapBoxToken = import.meta.env.MAPBOX_ACCESS_TOKEN
    const coordinateType = ref('dms')
    const styleElId = 'overlay-related'
    const photoEl = ref(null)
    const photoContainer = ref(null)
    const aspectRatioPercentage = ref(null)

    const photoDetails = computed(() => {
        return modalStore.photo.data
    })

    const toggleCoordinateType = () => {
        if (coordinateType.value === 'dms') {
            coordinateType.value = 'gps'
        } else {
            coordinateType.value = 'dms'
        }
    }

    const copyCoordinates = () => {
        const coordinates = useCoordinates(
            photoDetails.value.coordinates.latitude,
            photoDetails.value.coordinates.longitude,
            coordinateType.value
        )

        const input = document.createElement('input')
        input.setAttribute('value', coordinates)
        document.body.appendChild(input)
        input.select()
        input.setSelectionRange(0, 99999) // For mobile devices
        document.execCommand('copy')
        document.body.removeChild(input)
    }

    function unMountingEvent(id: string) {
        const styleEl = document.getElementById(id)

        if (styleEl) {
            styleEl.remove()
        }

        modalStore.setPhotoVisibility(false)
        modalStore.clearPhotoData()
        document.body.style.overflow = ''
    }

    onBeforeMount(() => {
        document.body.style.overflow = 'hidden'

        const photo = new Image()
        photo.src = `data:image/avif;base64,${photoDetails.value.encoded}`

        photo.onload = () => {
            const photoWidth = photo.naturalWidth
            const photoHeight = photo.naturalHeight
            const aspectRatio = photoWidth / photoHeight

            const maxContainerWidth = 70
            let containerWidth
            if (aspectRatio >= 1) {
                containerWidth = maxContainerWidth
            } else {
                containerWidth = maxContainerWidth * aspectRatio
            }

            photoContainer.value.style.width = `${containerWidth}%`

            aspectRatioPercentage.value = (1 / aspectRatio) * 100

            const style = document.createElement('style')
            style.id = styleElId
            style.innerHTML = `.photo::before { background-image: url(${photo.src}); }`
            document.head.appendChild(style)
        }
    })

    onBeforeUnmount(() => {
        unMountingEvent(styleElId)
    })

    onKeyStroke('Escape', () => {
        unMountingEvent(styleElId)
    })
</script>
