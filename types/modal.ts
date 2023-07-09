export interface IModalState {
    [key: string]: {
        visible: boolean
        data: {
            encoded: string
            author: {
                names: string
                avatar: string
            }
            place: {
                slug: string
                title: string
            }
            sizes: {
                width: number
                height: number
            }
            date: number
            coordinates: {
                latitude: number
                longitude: number
            }
        }
    }
}
