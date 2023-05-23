import { ILocaleDetails } from '@/types/locales'

const localeDetails: ILocaleDetails[] = [
    {
        name: 'Български език',
        code: 'bg',
        iso: 'bg-BG',
        file: 'bg.ts'
    },
    {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.ts'
    }
]

const localeList: string[] = ['bg', 'en']
const localeDefault = 'bg'
const localeFallback = 'en'

const datetimeFormats = {
    bg: {
        // 01 януари 2021 г., 13:23 ч.
        full: {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        },

        // 01 януари 2021 г.
        long: {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        },

        // януари 2021 г.
        medium: {
            year: 'numeric',
            month: 'long'
        },

        // 2021 г.
        short: {
            year: 'numeric'
        }
    },
    en: {
        // January 01, 2021 at 01:23 PM
        full: {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        },

        // January 01, 2021
        long: {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        },

        // January 2021
        medium: {
            year: 'numeric',
            month: 'long'
        },

        // 2021
        short: {
            year: 'numeric'
        }
    }
}

export { localeDetails, localeList, localeDefault, localeFallback, datetimeFormats }
