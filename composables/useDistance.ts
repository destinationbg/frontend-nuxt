import { useI18n } from 'vue-i18n'

function useDistance(value: number): string {
    const { t } = useI18n()

    if (value >= 1000) {
        const kilometers = value / 1000

        return t('general.kilometers', { count: kilometers })
    } else {
        return t('general.meters', { count: value })
    }
}

export { useDistance }
