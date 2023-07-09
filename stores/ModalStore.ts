import { defineStore } from 'pinia'
import { IModalState } from '@/types/modal'
import { createDefaultPhotoData, IPhotoData } from '@/utils/photoUtils'

export const useModalStore = defineStore('ModalStore', {
    state: (): IModalState => ({
        photo: {
            visible: false,
            data: createDefaultPhotoData()
        }
    }),
    actions: {
        setPhotoVisibility(value: boolean) {
            this.photo.visible = value
        },
        setPhotoData(data: IPhotoData) {
            this.photo.data = data
        },
        clearPhotoData() {
            this.photo.data = createDefaultPhotoData()
        }
    }
})
