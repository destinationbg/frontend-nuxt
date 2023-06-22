export default {
    meta: {
        appName: 'Дестинация: България'
    },
    general: {
        environment: {
            local: 'Среда за разработка',
            dev: 'Тестова среда'
        },
        error: {
            title: 'Грешка {code}',
            '401': 'За да достъпите тази страница, трябва да се удостоверите!',
            '403': 'Достъпът Ви до тази страница е забранен!',
            '404': 'Страницата, която се опитвате да достъпите, не може да бъде намерена!',
            '419': 'Страницата, която се опитвате да достъпите, е изтекла!',
            '422': 'Вашата заявка не може да бъде обработена в момента!',
            '429': 'Направили сте твърде много заявки!',
            '500': 'Сървърна грешка!',
            '503': 'Услугата е недостъпна!'
        },
        shevitsa: {
            title: 'Българска шевица',
            describe:
                'Българската шевица е красива и символична бродерия, пренасяща послания за хармония, културно богатство и връзка с природата, представена чрез разнообразие от орнаменти и цветове.'
        },
        rating: {
            title: 'Рейтинг {rating} от {max_rating}',
            reviews: '{rating} от {reviews} отзива'
        },
        altitude: '{meters} м. н.в.',
        localityWithPrefix: 'до {locality}',
        photographer: 'Фотограф: {author}',
        buttons: {
            back: 'Назад',
            backLabel: 'Предходна страница',
            bookmarkAdd: 'Запазване като отметка',
            bookmarkAddShort: 'Запазване',
            bookmarkRemove: 'Премахване на отметката',
            bookmarkRemoveShort: 'Премахване',
            bookmarks: 'Отметки',
            change: 'Промяна',
            copy: 'Копиране',
            favoriteAdd: 'Добавяне в любими',
            favoriteRemove: 'Премахване от любими',
            learnMore: 'Научете повече',
            location: 'Споделяне на локация',
            menu: 'Навигация',
            next: 'Напред',
            nextLabel: 'Следваща страница',
            photoPurchase: 'Закупуване на снимката',
            photosAll: 'Всички снимки',
            scrollLeft: 'Скролиране наляво',
            scrollRight: 'Скролиране надясно',
            search: 'Търсене',
            share: 'Споделяне',
            viewAllLocations: 'Вижте всички локации',
            viewAsGrid: 'Преглед като решетка',
            viewAsList: 'Преглед като списък',
            viewAsMap: 'Преглед като карта',
            viewLocalities: 'Разгледайте местностите',
            viewRegions: 'Разгледайте туристическите райони',
            viewUnescoSites: 'Разгледайте ЮНЕСКО обектите'
        },
        footer: {
            copyright: '&copy; {year} {name} - всички права запазени.',
            mission:
                'Този уебсайт е създаден с нестопанска цел от доброволци. Чрез него искаме да покажем богатото културно наследство и уникалните природни забележителности на България, за да ви вдъхновим да се отправите на пътешествие и да изследвате.',
            socials: 'Ако харесвате това, което правим, може да ни последвате в следните социални мрежи:',
            donate: 'Също, може да ни подкрепите финансово от тук.'
        }
    },
    page: {
        home: {
            title: 'Начало',
            description: '...'
        },
        about: {
            title: 'За нас',
            description: '...'
        },
        contacts: {
            title: 'Контакти',
            description: '...'
        },
        donate: {
            title: 'Дарения',
            description:
                'Ние изграждаме този уебсайт заедно с помощта на хора като теб. Ако си запален по историята и културата на България, ще се радваме да допринесеш за нашия проект. Твоят принос ще помогне да го направим още по-вълнуващ и ангажиращ за обществеността.'
        },
        explore: {
            title: 'Изследвайте',
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
            title: 'Пътеки',
            description:
                'Впуснете се в живописно пътешествие през спиращите дъха пътеки на България и се потопете в богатата история на страната, разнообразната култура и зашеметяващата природна красота, докато изследвате различните региони по пътя си.',
            subtitle: 'Изследвай неизследваното'
        },
        map: {
            title: 'Карта',
            description:
                'Влезте в очарователния свят на България с история и природна красота. Каним Ви да изследвате многото съкровища на страната, от древни руини до зашеметяващи природни пейзажи.',
            subtitle: 'България - изпълнена с красоти'
        },
        legal: {
            termsAndConditions: {
                title: 'Общи условия'
            },
            privacyPolicy: {
                title: 'Лични данни'
            },
            cookiePolicy: {
                title: 'Бисквитки'
            }
        }
    }
}
