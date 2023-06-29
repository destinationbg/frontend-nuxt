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
            exploreAndDiscover: 'Explore and discover in Bulgaria',
            favoriteAdd: 'Add to Favorites',
            favoriteRemove: 'Remove from Favourites',
            hideMap: 'Hide Map',
            learnMore: 'Learn More',
            location: 'Location Sharing',
            menu: 'Navigation',
            next: 'Next',
            nextLabel: 'Next Page',
            photoPurchase: 'Purchase the Photo',
            photosAll: 'All Photos',
            scrollDown: 'Scroll Down',
            scrollLeft: 'Scroll Left',
            scrollRight: 'Scroll Right',
            search: 'Search',
            share: 'Share',
            showLess: 'Show Less',
            showMap: 'Show Map',
            showMore: 'Show More',
            viewAllLocations: 'View All Locations',
            viewAsGrid: 'View as Grid',
            viewAsList: 'View as List',
            viewAsMap: 'View as Map',
            viewLocalities: 'View Localities',
            viewMoreHistoricalSites: 'View More Historical Sites',
            viewMoreLocalitiesAndRegions: 'View more localities and regions',
            viewMoreNatureLandmarks: 'View More Nature Landmarks',
            viewMoreSeasonalLocations: 'View More Seasonal Locations',
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
                story: {
                    title: 'Оставете се историята да ви заплени',
                    description:
                        'Историята на България обхваща хилядолетия и е оставила траен отпечатък в съзнанието на населяващите я и до днес хора. От древни тракийски цивилизации до Римски империи, територията на днешна България има разнообразно и завладяващо минало, което може да бъде изследвано.'
                },
                localities: {
                    title: 'Местности',
                    description:
                        'Открийте завладяващата история на България чрез нейните градове и села, смесвайки древна и съвременна култура с множество забележителности.'
                },
                touristRegions: {
                    title: 'Туристически райони',
                    description:
                        'Запознайте се с миналото на България, като изследвате нейните туристически региони, богати на история, архитектура и религиозни обекти.'
                },
                unescoWorldHeritage: {
                    title: 'Световно наследство на ЮНЕСКО',
                    description:
                        'Българските обекти от списъка на ЮНЕСКО за световно наследство предлагат поглед към богатото културно и природно наследство на страната, всеки от които предоставя уникално и незабравимо изживяване.'
                },
                wellSpentTime: {
                    title: 'Добре прекарано време',
                    description:
                        'Има много начини да прекарате времето си добре в България и да създадете трайни спомени от посещението си. Планирайте добре чрез нашите предложения и си осигурете пълноценно и приятно изживяване, което да помните цял живот.'
                },
                architecturalAchievements: {
                    title: 'Архитектурни достижения',
                    description: '...'
                },
                religiousSites: {
                    title: 'Религиозни обекти',
                    description: '...'
                },
                culture: {
                    title: 'Култура',
                    description: '...'
                },
                picturesqueNature: {
                    title: 'Живописна природа',
                    description: '...'
                },
                seasonalActivities: {
                    title: 'Сезонни дейности',
                    description:
                        'Независимо дали търсите вълнението от зимните спортове, красотата на пролетните цветове, топлината на летните плажове или цветовете на есента, България има по нещо за всеки.'
                },
                spring: {
                    title: 'Пролет',
                    description: '...'
                },
                summer: {
                    title: 'Лято',
                    description: '...'
                },
                autumn: {
                    title: 'Есен',
                    description: '...'
                },
                winter: {
                    title: 'Зима',
                    description: '...'
                }
            },
            activity: {
                zoos: {
                    title: 'Зоологически градини',
                    description:
                        'България има няколко зоологически градини, където семействата могат да се насладят на видове животни от цял свят. Посетителите могат да видят различни видове животни, като лъвове, слонове, зебри и много други.'
                },
                camping: {
                    title: 'Къмпингуване',
                    description:
                        'България е известна с невероятната си природа и предлага множество места за къмпингуване. Семействата могат да се насладят на красиви гледки и да се забавляват с дейности като разходки в планините, къпане в реки и езера и готвене на барбекю.'
                },
                fishing: {
                    title: 'Риболов',
                    description:
                        'България има много красиви реки, язовири и морски брегове, където семействата могат да се насладят на риболов. Това е перфектен начин да релаксирате и да се насладите на красивата природа на страната.'
                },
                winterSports: {
                    title: 'Зимни спортове',
                    description:
                        'България има много планински курорти, където семействата могат да се насладят на различни зимни спортове като ски, сноуборд, кънки и други. Това е перфектният начин да се забавлявате и да изживеете невероятно приключение в България.'
                },
                beaches: {
                    title: 'Плажуване',
                    description:
                        'България има много красиви морски курорти, където семействата могат да се насладят на красиви плажове и морски дейности като кайтсърфинг, гмуркане, плуване и други. Това е перфектният начин да релаксирате и да се насладите на лятото.'
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
