<template>
    <Head>
        <Title>{{ location.title }}</Title>

        <Meta name="description" :content="locationMetaDescription" />
    </Head>

    <main class="page-about">
        <LocationTop
            :title="location.title"
            :description="location.short_description"
            :breadcrumbs="location.breadcrumbs"
            :details="location.details"
        />

        <div class="sections">
            <LocationMap :data="location" />

            <div class="section-divider"></div>

            <LocationHistory :content="location.content" />

            <div class="section-divider"></div>

            <LocationPhotos :location="location.title" :data="location.photos" />

            <LocationInformation :data="location.information" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import photoJpg_1 from '@/assets/images/placeholders/locations/rila-monastery-1.jpg'
    import photoWebP_1 from '@/assets/images/placeholders/locations/rila-monastery-1.webp'
    import photoAVIF_1 from '@/assets/images/placeholders/locations/rila-monastery-1.avif'

    import photoJpg_2 from '@/assets/images/placeholders/locations/rila-monastery-2.jpg'
    import photoWebP_2 from '@/assets/images/placeholders/locations/rila-monastery-2.webp'
    import photoAVIF_2 from '@/assets/images/placeholders/locations/rila-monastery-2.avif'

    import photoJpg_3 from '@/assets/images/placeholders/locations/rila-monastery-3.jpg'
    import photoWebP_3 from '@/assets/images/placeholders/locations/rila-monastery-3.webp'
    import photoAVIF_3 from '@/assets/images/placeholders/locations/rila-monastery-3.avif'

    import photoJpg_4 from '@/assets/images/placeholders/locations/rila-monastery-4.jpg'
    import photoWebP_4 from '@/assets/images/placeholders/locations/rila-monastery-4.webp'
    import photoAVIF_4 from '@/assets/images/placeholders/locations/rila-monastery-4.avif'

    import photoJpg_5 from '@/assets/images/placeholders/locations/rila-monastery-5.jpg'
    import photoWebP_5 from '@/assets/images/placeholders/locations/rila-monastery-5.webp'
    import photoAVIF_5 from '@/assets/images/placeholders/locations/rila-monastery-5.avif'

    import photoJpg_6 from '@/assets/images/placeholders/locations/rila-monastery-6.jpg'
    import photoWebP_6 from '@/assets/images/placeholders/locations/rila-monastery-6.webp'
    import photoAVIF_6 from '@/assets/images/placeholders/locations/rila-monastery-6.avif'

    import photoJpg_7 from '@/assets/images/placeholders/locations/rila-monastery-7.jpg'
    import photoWebP_7 from '@/assets/images/placeholders/locations/rila-monastery-7.webp'
    import photoAVIF_7 from '@/assets/images/placeholders/locations/rila-monastery-7.avif'

    import mapPlaceholder from '@/assets/images/placeholders/locations/map-placeholder.avif'

    const location = {
        title: 'Рилски манастир "Св. Иван Рилски"',
        short_description:
            'Рилският манастир е най-големият и известен източноправославен манастир в България и е един от най-важните културно-исторически и архитектурни паметници на страната. Основан е през 10-ти век и е разположен в дълбоката долина на река Рилска в природен парк „Рилски манастир“. Манастирът е дом на много ценни икони, датиращи от 14-ти до 19-ти век, като един от най-ценните предмети е позлатения иконостас, известен със своята дърворезба. През 1976-та година е включен в списъка на ЮНЕСКО за световно наследство.',
        content:
            '<h2>Историческо значение</h2><p>Основан през 10-ти век, Рилският манастир се счита за един от най-важните културно-исторически и архитектурни паметници на България. Той е бил подкрепян и уважаван от българските владетели през цялата история, а почти всеки цар от Второто българско царство е правил големи дарения на манастира, превръщайки го в културен и духовен център на българското национално самосъзнание.</p><p>Най-старите сгради в комплекса датират от първата половина на 14-ти век, по времето на цар Петър Първи (между 927-ма година и 968-ма година). Идването на османците в края на 14-ти век води до многобройни набези и разрушаването на манастира в средата на 15-ти век. Той е възстановен в края на 15-ти век с помощта на дарения от султана Мара Бранкович, Руската православна църква и манастира Росикон на Света гора.</p><p>По време на Възраждането (между 18-ти и 19-ти век) манастирът е опожарен през 1833-та година и възстановен между 1834-та и 1862-ра година с помощта на заможни българи от цялата страна, под ръководството на известния архитект Алекси Рилец.</p><!-- more --><h2>Архитектурни характеристики</h2><p>Комплексът заема площ от 8800 квадратни метра и е с правоъгълна форма, съсредоточен върху вътрешния двор (3200 квадратни метра), където се намират кулата и главната църква. Основната църква на манастира е построена в средата на 19-ти век и има пет купола, три олтара и два странични параклиса. Един от най-ценните предмети в църквата е позлатения иконостас, известен със своята дърворезба, чието създаване отнема пет години от четирима майстори.</p><p>Стенописите в църквата са дело на много майстори от Банско, Самоков и Разлог, сред които известните братя Захари Зограф и Димитър Зограф. Църквата е дом и на много ценни икони, датиращи от 14-ти до 19-ти век. Портиците в двора имат мамелюкско влияние с раираната живопис и куполите, които стават по-популярни в Османската империя след завладяването на Египет.</p><p>Четириетажната жилищна част на комплекса (без сутерена) се състои от 300 стаи, четири параклиса, игуменска стая и други сервизни помещения.</p><h2>Туристическа забележителност</h2><p>Рилският манастир е ключова туристическа атракция в България, като само през 2008-ма година е привлякъл около 900 хиляди посетители. Изобразен е на обратната страна на банкнотата от един лев, емисия 1999-та година. Манастирският комплекс е считан за един от най-големите шедьоври на българската възрожденска архитектура и е обявен за национален исторически паметник през 1976-та година. През 1976-та година е включен в списъка на ЮНЕСКО за световно наследство, а от 1991-ва година е изцяло на подчинение на Светия Синод на Българската православна църква.</p><h2>Известни посетители</h2><p>През годините Рилският манастир е посрещал много известни посетители от цял свят, включително папа Йоан Павел Втори, който посети манастира по време на поклонението си в България през 2002-ра година. Манастирът е служил и като скривалище на българските революционери по време на османското владичество.</p><h2>Рилският манастир днес</h2><p>Днес Рилският манастир продължава да бъде действащ манастир и основна туристическа атракция в България. Отворен е за посетители и предлага екскурзоводско обслужване на комплекса, както и нощувки за желаещите да пренощуват в манастира. Манастирът разполага и с музей, който показва неговата история, изкуство и архитектура.</p><p>Всяка година на 18-ти август манастирът отбелязва празника на Свети Иван Рилски със специална литургия и литийно шествие. Манастирът също така е домакин на различни културни събития през цялата година, включително концерти, изложби и лекции.</p><p>През последните години манастирът е изправен пред някои предизвикателства, свързани с туризма, включително пренаселеност и увреждане на природната среда. Полагат се усилия за справяне с тези проблеми и осигуряване на устойчиво управление на манастира и околностите му.</p>',
        breadcrumbs: [
            {
                name: 'Рило-Пирински район',
                url: '/location/rila-monastery'
            },
            {
                name: 'Община Рила',
                url: '/location/rila-monastery'
            }
        ],
        details: {
            coordinates: {
                latitude: 42.13348,
                longitude: 23.34019
            },
            rating: {
                score: 3.4,
                total_reviews: 15594
            },
            locality: 'град Рила',
            locality_prefix: true,
            altitude: 1162,
            unesco: false,
            photo: {
                default: photoJpg_1,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_1
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_1
                    }
                ],
                author: 'Андрей Андреев'
            }
        },
        information: {
            weather: {
                text: 'Манастирът е подходящ за посещение през цялата година.',
                forecast: {
                    icon: 'cloud-sun',
                    temperature: 12,
                    text: 'облачно'
                }
            },
            work_time:
                '09.00 - 12.00 часа<br />13.00 - 17.30 часа<br /><br /><strong>Почивни дни:</strong><br />неделя и понеделник',
            prices: '<strong>Безплатен вход:</strong><br />всяка втора сряда от месеца<br /><br /><strong>Нощувки:</strong><br />25 лева на легло на вечер',
            contacts:
                '<strong>Телефон:</strong><br /><a href="tel:+35970542208">+359 70 54 2208</a><br /><br /><strong>Имейл адрес:</strong><br /><a href="mailto:info@rilskimanastir.org">info@rilskimanastir.org</a><br /><br /><strong>Уебсайт:</strong><br /><a href="http://rilskimanastir.org/" target="_blank" rel="noopener">http://rilskimanastir.org/</a>'
        },
        photos: [
            {
                default: photoJpg_1,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_1
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_1
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_2,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_2
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_2
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_3,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_3
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_3
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_4,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_4
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_4
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_5,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_5
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_5
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_6,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_6
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_6
                    }
                ],
                author: 'Андрей Андреев'
            },
            {
                default: photoJpg_7,
                formats: [
                    {
                        type: 'webp',
                        image: photoWebP_7
                    },
                    {
                        type: 'avif',
                        image: photoAVIF_7
                    }
                ],
                author: 'Андрей Андреев'
            }
        ],
        mapPlaceholder
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
