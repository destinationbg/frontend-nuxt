export interface IGeneralState {
    [key: string]: {
        shown: boolean
        state: number
        outside?: boolean
        type?: string | null
    }
}
