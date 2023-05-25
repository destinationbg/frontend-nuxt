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
        buttons: {
            back: 'Back',
            backLabel: 'Previous Page',
            bookmarkAdd: 'Bookmark it',
            bookmarkRemove: 'Remove Bookmark',
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
            viewAsMap: 'View as Map'
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
            subtitle: 'Потопете се в наследството'
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
