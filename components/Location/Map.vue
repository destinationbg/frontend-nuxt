<template>
    <section ref="sectionRef" class="location-map">
        <div class="container">
            <div v-if="!mapShown" class="placeholder">
                <picture>
                    <img :src="data.mapPlaceholder" :alt="data.title" width="640" height="360" loading="lazy" decoding="async" />
                </picture>

                <BaseButton size="big" @click="toggleMap">
                    <template #text>
                        <span>{{ t('general.buttons.showMap') }}</span>
                    </template>
                </BaseButton>
            </div>
            <div v-else class="map">
                <MapboxMap map-id="map-1" :options="mapOptions">
                    <MapboxFullscreenControl position="top-right" />
                    <MapboxGeolocateControl position="top-right" />
                    <MapboxNavigationControl position="top-right" />

                    <MapboxDefaultMarker
                        marker-id="marker-1"
                        :options="mapMarkerOptions"
                        :lnglat="[data.details.coordinates.longitude, data.details.coordinates.latitude]"
                    />
                </MapboxMap>

                <div class="coordinates">
                    <p>{{ $t('general.map.coordinates') }}</p>
                    <div class="coords">{{ data.details.coordinates.latitude }}, {{ data.details.coordinates.longitude }}</div>
                </div>

                <BaseButton size="big" @click="toggleMap">
                    <template #text>
                        <span>{{ t('general.buttons.hideMap') }}</span>
                    </template>
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps({
        /**
         * The location data
         *
         * @type Object
         * @default {}
         * @name data
         */
        data: {
            type: Object,
            default: () => ({})
        }
    })

    const { t } = useI18n()
    const sectionRef = ref(null)
    const mapShown = ref(false)

    const mapOptions = reactive({
        style: import.meta.env.VITE_APP_MAPBOX_MAP_STYLE,
        center: [props.data.details.coordinates.longitude, props.data.details.coordinates.latitude],
        zoom: 17,
        scrollZoom: false,
        crossSourceCollisions: false,
        failIfMajorPerformanceCaveat: false,
        attributionControl: false,
        preserveDrawingBuffer: true,
        hash: false,
        pitchWithRotate: false
    })

    const mapMarkerOptions = reactive({
        center: mapOptions.center,
        draggable: false,
        visible: true,
        scale: 1,
        text: props.data.title
    })

    const toggleMap = () => {
        mapShown.value = !mapShown.value

        const offset = 150
        const targetPosition = sectionRef.value.getBoundingClientRect().top + window.pageYOffset - offset

        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }, 150)
    }

    onKeyStroke('Escape', () => {
        if (mapShown.value) mapShown.value = false
    })
</script>
