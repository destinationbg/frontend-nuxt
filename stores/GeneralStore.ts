import { defineStore } from 'pinia'

import { IGeneralState } from '@/types/general'

/**
 * State could be:
 *
 *  0 = closed
 *  1 = opened
 *  2 = closing
 */
export const useGeneralStore = defineStore('GeneralStore', {
    state: (): IGeneralState => ({
        languages: {
            shown: false,
            state: 0
        }
    })
})
