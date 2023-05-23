import { ISocialNetworks } from '@/types/social-networks'

const socialNetworks: ISocialNetworks[] = [
    {
        link: import.meta.env.VITE_APP_PROJECT_TWITTER,
        title: 'Twitter'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_FACEBOOK,
        title: 'Facebook'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_INSTAGRAM,
        title: 'Instagram'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_GITHUB,
        title: 'GitHub'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_DISCORD,
        title: 'Discord'
    }
]

export { socialNetworks }
