export default {
    meta: {
        appName: 'Destination: Bulgaria'
    },
    general: {
        environment: {
            local: 'Development Environment',
            dev: 'Testing Environment'
        },
        error: {
            title: 'Error {code}',
            '401': 'Unauthorized',
            '403': 'Forbidden',
            '404': 'The page you are looking for could not be found!',
            '419': 'The page you are trying to access has expired!',
            '422': "Your request can't be processed right now!",
            '429': 'Too Many Requests',
            '500': 'Server Error',
            '503': 'Service Unavailable'
        },
        shevitsa: {
            title: 'Bulgarian Shevitsa',
            describe:
                'The Bulgarian shevitsa is a beautiful and symbolic embroidery, conveying messages of harmony, cultural richness and connection with nature, represented through a variety of ornaments and colors.'
        },
        rating: {
            title: 'Rating {rating} out of {max_rating}',
            reviews: '{rating} from {reviews} reviews'
        },
        altitude: '{meters} m above sea level',
        localityWithPrefix: 'near {locality}',
        photographer: 'Photographer: {author}',
        buttons: {
            back: 'Back',
            backLabel: 'Previous Page',
            bookmarkAdd: 'Bookmark this location',
            bookmarkAddShort: 'Bookmark it',
            bookmarkRemove: 'Remove Bookmark',
            bookmarkRemoveShort: 'Remove Bookmark',
            bookmarks: 'Bookmarks',
            change: 'Change',
            copy: 'Copy',
            favoriteAdd: 'Add to Favorites',
            favoriteRemove: 'Remove from Favourites',
            location: 'Location Sharing',
            menu: 'Navigation',
            next: 'Next',
            nextLabel: 'Next Page',
            photoPurchase: 'Purchase the Photo',
            photosAll: 'All Photos',
            search: 'Search',
            share: 'Share',
            viewAsGrid: 'View as Grid',
            viewAsList: 'View as List',
            viewAsMap: 'View as Map',
            viewAllLocations: 'View All Locations',
            viewLocalities: 'View Localities',
            viewRegions: 'View Tourist Regions',
            viewUnescoSites: 'View UNESCO Sites'
        },
        footer: {
            copyright: '&copy; {year} {name} - All Rights Reserved.',
            mission:
                'This website is a non-profit organization created by volunteers. Through it we want to showcase the rich cultural heritage and unique natural sights of Bulgaria to inspire you to travel and explore.',
            socials: 'If you like what we do, you can follow us on the following social networks:',
            donate: 'Also, you can support us financially from here.'
        }
    },
    page: {
        home: {
            title: 'Homepage',
            description: '...'
        },
        about: {
            title: 'About Us',
            description: '...'
        },
        contacts: {
            title: 'Contacts',
            description: '...'
        },
        donate: {
            title: 'Donate',
            description:
                'Ние изграждаме този уебсайт заедно с помощта на хора като теб. Ако си запален по историята и културата на България, ще се радваме да допринесеш за нашия проект. Твоят принос ще помогне да го направим още по-вълнуващ и ангажиращ за обществеността.'
        },
        explore: {
            title: 'Explore',
            description:
                'Открийте красотата и наследството на България. Разгледайте нейните най-емблематични забележителности, всяка от които показва богатото културно наследство на страната, архитектурната красота и природните чудеса.',
            subtitle: 'Потопете се в наследството',
            category: {
                leisure: {
                    title: 'Почивка и отдих',
                    description:
                        'Няма значение какво търсите и дали пътувате с приятели, със семейството си или просто обичате времето, прекарано сами със себе си или с любовта на живота Ви. България има какво да предложи на всеки един от вас.'
                },
                familyAdventures: {
                    title: 'Семейни приключения',
                    description:
                        'За тези, които обичат да пътуват с цялото си семейство, България предлага безброй вълнуващи приключения за малки и големи - от градски паркове до изследване на красивата природа на планините и морето.'
                },
                romanceForTwo: {
                    title: 'Романтика за двама',
                    description:
                        'Ако искате да избягате от градския живот и да се насладите на малко време на спокойствие с любимия човек, България предлага романтични места за разходки, красиви плажове и вълнуващи преживявания за двама.'
                },
                timeWithFriends: {
                    title: 'Време с приятели',
                    description:
                        'За тези, които търсят забавление и нови преживявания с приятели, България е идеалната дестинация. От топлия пясък на морския бряг до разнообразния градски живот, в България има много начини да се забавлявате с приятелите си.'
                },
                soloTravelers: {
                    title: 'Самостоятелни пътешественици',
                    description:
                        'Ако пътувате сами, може да се насладите на спокойствието и свободата да изследвате България в свое темпо. България предлага красива природа, уникални културни забележителности и много възможности за отдих и релакс.'
                },
                zoo: {
                    title: 'Зоологически градини',
                    description:
                        'България има няколко зоологически градини, където семействата могат да се насладят на видове животни от цял свят. Посетителите могат да видят различни видове животни, като лъвове, слонове, зебри и много други.'
                }
            }
        },
        trails: {
            title: 'Trails',
            description:
                'Впуснете се в живописно пътешествие през спиращите дъха пътеки на България и се потопете в богатата история на страната, разнообразната култура и зашеметяващата природна красота, докато изследвате различните региони по пътя си.',
            subtitle: 'Изследвай неизследваното'
        },
        map: {
            title: 'Map',
            description:
                'Влезте в очарователния свят на България с история и природна красота. Каним Ви да изследвате многото съкровища на страната, от древни руини до зашеметяващи природни пейзажи.',
            subtitle: 'България - изпълнена с красоти'
        },
        legal: {
            termsAndConditions: {
                title: 'Terms & Conditions'
            },
            privacyPolicy: {
                title: 'Privacy Policy'
            },
            cookiePolicy: {
                title: 'Cookie Policy'
            }
        }
    }
}
