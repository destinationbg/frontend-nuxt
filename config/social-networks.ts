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
        link: `https://github.com/${import.meta.env.VITE_GITHUB_ORGANIZATION}`,
        title: 'GitHub'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_FIGMA,
        title: 'Figma'
    },
    {
        link: import.meta.env.VITE_APP_PROJECT_DISCORD,
        title: 'Discord'
    }
]

export { socialNetworks }
