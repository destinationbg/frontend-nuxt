<template>
    <div v-if="shown" class="overlay">
        <div ref="photoContainer" class="photo-container">
            <div ref="photoEl" class="photo" :style="{ paddingBottom: aspectRatioPercentage + '%' }"></div>
        </div>
        <div class="details-container">
            <div class="container">
                <div class="wrapper">
                    <header>
                        <div class="author">
                            <picture>
                                <img :src="`${photoDetails.author.avatar}?size=38`" :alt="photoDetails.author.names" />
                            </picture>
                            <strong>{{ photoDetails.author.names }}</strong>
                        </div>
                        <ul>
                            <li>
                                <button type="button" class="button primary rounded with-icon-left">
                                    <i class="fi fi-rr-heart" />
                                    <span>Добавяне в любими</span>
                                </button>
                                <a href="#" target="_blank" rel="noopener" class="button green rounded with-icon-left">
                                    <i class="fi fi-rr-shopping-cart-add" />
                                    <span>Закупуване на снимката</span>
                                </a>
                            </li>
                        </ul>
                    </header>
                    <div class="flex">
                        <div class="details">
                            <div class="heading">
                                <i class="fi fi-rr-file-circle-info" />
                                <span>Информация</span>
                            </div>
                            <ul>
                                <li v-if="photoDetails.place">
                                    <span class="title">Заснет обект</span>
                                    <span class="content">
                                        <NuxtLink :to="localePath(`/place/${photoDetails.place.slug}`)">
                                            {{ photoDetails.place.title }}
                                        </NuxtLink>
                                    </span>
                                </li>
                                <li v-if="photoDetails.sizes">
                                    <span class="title">Размери</span>
                                    <span class="content">{{ photoDetails.sizes.width }} x {{ photoDetails.sizes.height }}</span>
                                </li>
                                <li v-if="photoDetails.date">
                                    <span class="title">Дата на качване</span>
                                    <span class="content">{{ d(new Date(photoDetails.date), 'full', locale) }}</span>
                                </li>
                                <li v-if="photoDetails.coords">
                                    <span class="title">GPS координати</span>
                                    <span class="content">
                                        <span>
                                            {{
                                                useCoordinates(
                                                    photoDetails.coords.latitude,
                                                    photoDetails.coords.longitude,
                                                    coordinateType
                                                )
                                            }}
                                        </span>
                                        <button type="button" :title="t('general.buttons.change')">
                                            <i class="fi fi-rr-replace" />
                                        </button>
                                        <button type="button" :title="t('general.buttons.copy')">
                                            <i class="fi fi-rr-copy-alt" />
                                        </button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="photoDetails.place && photoDetails.coords" class="location-snapshot">
                            <img
                                :src="`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson(%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${photoDetails.coords.longitude}%2C${photoDetails.coords.latitude}%5D%7D%7D%5D%7D)/${photoDetails.coords.longitude},${photoDetails.coords.latitude},17.1,0/200x126?access_token=pk.eyJ1IjoieGVuYmciLCJhIjoiY2xkb29ycHl1MHY4ZDNxdDZvNHBoNDF6aSJ9.B5k8gMRorRmRJL28KxVZBw`"
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
    const { d, t, locale } = useI18n()
    const localePath = useLocalePath()

    const shown = ref(true)
    const coordinateType = ref('dms')
    const styleElId = 'overlay-related'
    const photoEl = ref(null)
    const photoContainer = ref(null)
    const aspectRatioPercentage = ref(null)

    const photoDetails = {
        photo: 'encoded data',
        author: {
            names: 'Том Атанасов',
            avatar: 'https://secure.gravatar.com/avatar/2a30cbe5435813200be7610cde63dc4f'
        },
        place: {
            slug: 'rilski-manastir',
            title: 'Манастир "Свети Иван Рилски"'
        },
        sizes: {
            width: 1792,
            height: 2304
        },
        date: 1684497915000,
        coords: {
            latitude: 42.13348,
            longitude: 23.34019
        }
    }

    const useCoordinates = (latitude: number, longitude: number, type: string) => {
        if (type === 'dms') {
            // Convert the decimal latitude and longitude values into their degree, minute, and second equivalents
            const convertToDMS = (decimalValue: number, direction: string) => {
                const degrees = Math.floor(decimalValue)
                const minutes = Math.floor((decimalValue - degrees) * 60)
                const seconds = ((decimalValue - degrees - minutes / 60) * 3600).toFixed(1)

                return `${degrees}°${minutes.toString().padStart(2, '0')}'${seconds.toString().padStart(4, '0')}"${direction}`
            }

            const dmsLatitude = convertToDMS(latitude, 'N')
            const dmsLongitude = convertToDMS(longitude, 'E')

            // Concatenate the degree, minute, and second values with their corresponding direction
            return `${dmsLatitude} ${dmsLongitude}`
        } else {
            return `${latitude}, ${longitude}`
        }
    }

    function unMountingEvent(id: string) {
        const styleEl = document.getElementById(id)

        if (styleEl) {
            styleEl.remove()
        }

        shown.value = false
        document.body.style.overflow = ''
    }

    onBeforeMount(() => {
        document.body.style.overflow = 'hidden'

        const photo = new Image()
        photo.src = `data:image/jpeg;base64,${photoDetails.photo}`

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
            style.innerHTML = `.photo::before { background-image: url(data:image/jpeg;base64,${photoDetails.photo}); }`
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
