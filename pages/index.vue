<template>
    <main class="page-homepage">
        <SectionSlider :data="slides" />

        <div class="sections">
            <SectionRepeater
                v-for="(data, index) in categories"
                :key="index"
                type="categories"
                :position="index % 2 == 0 ? true : false"
            >
                <template #heading>
                    <div class="container">
                        <SectionHeading :has-description="true" variant="main-category">
                            <template v-if="data.title" #title>
                                <h1 v-if="index === 0">{{ data.title }}</h1>
                                <h2 v-else>{{ data.title }}</h2>
                            </template>

                            <template #description>
                                <span v-html="data.description" />
                            </template>
                        </SectionHeading>
                    </div>
                </template>
                <template v-if="data.locations" #grid>
                    <div class="grid">
                        <SectionCard
                            v-for="(category, categoryIndex) in data.locations"
                            :key="categoryIndex"
                            type="rectangle"
                            :data="category"
                        />
                    </div>
                </template>
                <template v-if="data.button" #button>
                    <div class="container">
                        <div class="buttons">
                            <NuxtLink :to="localePath(data.url)" class="button big primary">
                                <span>{{ data.button }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </template>
                <template v-if="index !== 0 && index + 1 !== categories.length && index + 2 !== categories.length" #shevitsa>
                    <SectionShevitsa :variant="1" />
                </template>
            </SectionRepeater>
        </div>
    </main>
</template>

<script setup lang="ts">
    import plovdiv from '@/assets/images/placeholders/slider/plovdiv.avif'
    import varnaNecropolis from '@/assets/images/placeholders/slider/varna-necropolis.avif'
    import rilaMonastery from '@/assets/images/placeholders/slider/rila-monastery.avif'
    import boyanaChurch from '@/assets/images/placeholders/slider/boyana-church.avif'
    import thracianTombOfKazanlak from '@/assets/images/placeholders/slider/thracian-tomb-of-kazanlak.avif'

    import wonderfulBridges from '@/assets/images/placeholders/homepage/wonderful-bridges.avif'
    import sevenRilaLakes from '@/assets/images/placeholders/homepage/seven-rila-lakes.avif'
    import belogradchikRocks from '@/assets/images/placeholders/homepage/belogradchik-rocks.avif'
    import vachaDam from '@/assets/images/placeholders/homepage/vacha-dam.avif'
    import kardzhaliDam from '@/assets/images/placeholders/homepage/kardzhali-dam.avif'

    const { t } = useI18n()
    const localePath = useLocalePath()

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

    const categories = [
        {
            title: 'България - красива и магична дестинация за всеки пътешественик',
            description:
                'Това не е просто слоган. Това е едно чувство, което прониква в нас и ни вдъхновява, предизвиквайки усещане за вълнение и приключение. То ни кани да се потопим в безкрайните простори на природните красоти и да изпитаме нови и вълнуващи усещания от приключенията, които България има да ни предложи.'
        },
        {
            title: 'Зовът на природата',
            description:
                'Когато посетим България, сме пленени от красотата на планините, реките и морето, които я заобикалят. Изумяваме се от разнообразието на пейзажите - от върховете на планините до чаровните морски плажове. Всеки ъгъл на тази прекрасна страна открива нещо ново и изненадващо, като ни предлага възможността да се почувстваме свободни и живи.',
            button: t('general.buttons.viewMoreNatureLandmarks'),
            url: '/explore/well-spent-time/picturesque-nature',
            locations: [
                {
                    title: 'Чудните мостове',
                    url: '/location/wonderful-bridges',
                    image: wonderfulBridges
                },
                {
                    title: 'Седемте рилски езера',
                    url: '/location/seven-rila-lakes',
                    image: sevenRilaLakes
                },
                {
                    title: 'Белоградчишки скали',
                    url: '/location/belogradchik-rocks',
                    image: belogradchikRocks
                },
                {
                    title: 'Язовир „Въча“',
                    url: '/location/vacha-dam',
                    image: vachaDam
                },
                {
                    title: 'Язовир „Кърджали“',
                    url: '/location/kardzhali-dam',
                    image: kardzhaliDam
                }
            ]
        },
        {
            title: 'Запленяващата история',
            description:
                'Страната е не само красива, но и пропита с магията на своята богата история и народна култура. Средневековни крепости, старинни градове и духът на древни цивилизации се преплитат в този земен рай. По всяка улица, по всяко селце и по всяко забележително място можем да усетим пулсиращото присъствие на миналото, което допълва магията на преживяването ни.',
            button: t('general.buttons.viewMoreHistoricalSites'),
            url: '/explore/story',
            locations: [
                {
                    title: 'Чудните мостове',
                    url: '/location/wonderful-bridges',
                    image: wonderfulBridges
                },
                {
                    title: 'Седемте рилски езера',
                    url: '/location/seven-rila-lakes',
                    image: sevenRilaLakes
                },
                {
                    title: 'Белоградчишки скали',
                    url: '/location/belogradchik-rocks',
                    image: belogradchikRocks
                },
                {
                    title: 'Язовир „Въча“',
                    url: '/location/vacha-dam',
                    image: vachaDam
                },
                {
                    title: 'Язовир „Кърджали“',
                    url: '/location/kardzhali-dam',
                    image: kardzhaliDam
                }
            ]
        },
        {
            title: 'Подходяща за всеки сезон',
            description:
                'Това е дестинация, която ни предлага изобилие от възможности за активни почивки и приключения. От планинските върхове, обгърнати от облаци, до дълбоките каньони и мистериозните пещери, тук всяка стъпка ни отваря врати към нови и неочаквани открития. Любителите на планински спортове ще се впуснат в предизвикателства на заснежени склонове и разнообразни пътеки, докато почитателите на водни спортове ще открият рай в кристално чистите води на реките и морето.',
            button: t('general.buttons.viewMoreSeasonalLocations'),
            url: '/explore/seasonal-activities',
            locations: [
                {
                    title: 'Чудните мостове',
                    url: '/location/wonderful-bridges',
                    image: wonderfulBridges
                },
                {
                    title: 'Седемте рилски езера',
                    url: '/location/seven-rila-lakes',
                    image: sevenRilaLakes
                },
                {
                    title: 'Белоградчишки скали',
                    url: '/location/belogradchik-rocks',
                    image: belogradchikRocks
                },
                {
                    title: 'Язовир „Въча“',
                    url: '/location/vacha-dam',
                    image: vachaDam
                },
                {
                    title: 'Язовир „Кърджали“',
                    url: '/location/kardzhali-dam',
                    image: kardzhaliDam
                }
            ]
        },
        {
            title: 'Автентичност и гостоприемство',
            description:
                'Но България не е само природна красота и исторически богатства. Тя е и държава с живописни села, гостоприемни хора и богата народна кухня. В тези автентични населени места ще намерите истинската сърцевина на страната, където времето стои на място и традициите се запазват с гордост. Тук можем да се потопим в културата на народа, да опитаме традиционни ястия, да се научим на народни песни и танци, и да се сближим с гостоприемните местни жители.',
            button: t('general.buttons.viewMoreLocalitiesAndRegions'),
            url: '/explore/well-spent-time',
            locations: [
                {
                    title: 'Чудните мостове',
                    url: '/location/wonderful-bridges',
                    image: wonderfulBridges
                },
                {
                    title: 'Седемте рилски езера',
                    url: '/location/seven-rila-lakes',
                    image: sevenRilaLakes
                },
                {
                    title: 'Белоградчишки скали',
                    url: '/location/belogradchik-rocks',
                    image: belogradchikRocks
                },
                {
                    title: 'Язовир „Въча“',
                    url: '/location/vacha-dam',
                    image: vachaDam
                },
                {
                    title: 'Язовир „Кърджали“',
                    url: '/location/kardzhali-dam',
                    image: kardzhaliDam
                }
            ]
        },
        {
            description:
                'Така че, когато кажем "<strong>България - красива и магична дестинация за всеки пътешественик</strong>", говорим за нещо повече от просто думи, с които съставяме изречение. Изричането на тези думи ни създава чувство, когато сме там, когато се потопим в една богата палитра от природни пейзажи, културни съкровища и приключения. Това е муза, която ни вдъхновява да изследваме, да открием и да се връщаме отново и отново, защото България ни предлага безкрайност от открития и незабравими преживявания. Неизчерпаемите възможности за приключения събуждат в нас дивата страст.',
            button: t('general.buttons.exploreAndDiscover'),
            url: '/explore'
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
