<template>
    <main class="page-homepage">
        <SectionSlider :data="slides" />
    </main>
</template>

<script setup lang="ts">
    import plovdiv from '@/assets/images/placeholders/slider/plovdiv.avif'
    import varnaNecropolis from '@/assets/images/placeholders/slider/varna-necropolis.avif'
    import rilaMonastery from '@/assets/images/placeholders/slider/rila-monastery.avif'
    import boyanaChurch from '@/assets/images/placeholders/slider/boyana-church.avif'
    import thracianTombOfKazanlak from '@/assets/images/placeholders/slider/thracian-tomb-of-kazanlak.avif'

    const slides = [
        {
            title: 'Най-старият жив град в Европа и шестият най-стар в света',
            location: 'Пловдив',
            image: plovdiv,
            url: '/city/plovdiv'
        },
        {
            title: 'Най-старото открито златно съкровище в света',
            location: 'Варненски халколитен некропол',
            image: varnaNecropolis,
            url: '/location/varna-necropolis'
        },
        {
            title: 'Най-големият манастир в България',
            location: 'Манастир “Свети Иван Рилски”',
            image: rilaMonastery,
            url: '/location/rila-monastery'
        },
        {
            title: 'Църквата с едни от най-добрите образци на източноевропейското средновековно изкуство',
            location: 'Боянска църква',
            image: boyanaChurch,
            url: '/location/boyana-church'
        },
        {
            title: 'Един от най-добрите образци на тракийското гробнично изкуство',
            location: 'Тракийска гробница Казанлък',
            image: thracianTombOfKazanlak,
            url: '/location/thracian-tomb-of-kazanlak'
        }
    ]

    definePageMeta({
        auth: false,
        alternative: true
    })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
