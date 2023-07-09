export interface IPhoto {
    slug: string
    title: string
    photos: string[]
    details: IPhotoData
}

export interface IPhotoData {
    [x: string]: any
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

export function createDefaultPhotoData(): IPhotoData {
    return {
        encoded: '',
        author: {
            names: '',
            avatar: ''
        },
        place: {
            slug: '',
            title: ''
        },
        sizes: {
            width: 0,
            height: 0
        },
        date: 0,
        coordinates: {
            latitude: 0,
            longitude: 0
        }
    }
}

export function transformDataToPhotoData(data: IPhoto): IPhotoData {
    const { details, slug, title } = data

    return {
        encoded: details.photo.encoded,
        author: {
            names: details.photo.author.names,
            avatar: details.photo.author.avatar
        },
        place: {
            slug,
            title
        },
        sizes: {
            width: details.photo.sizes.width,
            height: details.photo.sizes.height
        },
        date: details.photo.date,
        coordinates: {
            latitude: details.coordinates.latitude,
            longitude: details.coordinates.longitude
        }
    }
}
