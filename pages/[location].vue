<template>
    <Head>
        <Title>{{ location.title }}</Title>

        <Meta name="description" :content="locationMetaDescription" />
    </Head>

    <main class="page-about">
        <SectionTop
            variant="location-view"
            :slug="location.slug"
            :title="location.title"
            :description="location.short_description"
            :breadcrumbs="location.breadcrumbs"
            :details="location.details"
        />
    </main>
</template>

<script setup lang="ts">
    import photoJpg from '@/assets/images/placeholders/locations/rila-monastery.jpg'
    import photoWebP from '@/assets/images/placeholders/locations/rila-monastery.webp'
    import photoAVIF from '@/assets/images/placeholders/locations/rila-monastery.avif'

    const location = {
        slug: 'rila-monastery',
        title: 'Рилски манастир "Св. Иван Рилски"',
        short_description:
            'Рилският манастир е най-големият и известен източноправославен манастир в България и е един от най-важните културно-исторически и архитектурни паметници на страната. Основан е през 10-ти век и е разположен в дълбоката долина на река Рилска в природен парк „Рилски манастир“. Манастирът е дом на много ценни икони, датиращи от 14-ти до 19-ти век, като един от най-ценните предмети е позлатения иконостас, известен със своята дърворезба. През 1976-та година е включен в списъка на ЮНЕСКО за световно наследство.',
        breadcrumbs: [
            {
                name: 'Рило-Пирински район',
                url: '/rila-monastery'
            },
            {
                name: 'Община Рила',
                url: '/rila-monastery'
            }
        ],
        details: {
            rating: {
                score: 4.2,
                total_reviews: 15594
            },
            locality: 'град Рила',
            locality_prefix: true,
            altitude: 1162,
            unesco: false,
            photo: {
                default: photoJpg,
                formats: [photoWebP, photoAVIF],
                author: 'Андрей Андреев'
            }
        }
    }

    const locationMetaDescription =
        location.short_description.length > 160
            ? location.short_description.substring(0, 157) + '...'
            : location.short_description

    definePageMeta({ auth: false })

    useSchemaOrg([
        defineWebPage({
            '@type': 'WebPage'
        })
    ])
</script>
