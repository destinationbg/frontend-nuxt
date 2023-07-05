// TODO: Hydration issue
function useDateFormatter(timestamp: number, locale: Intl.LocalesArgument) {
    const output = new Date(timestamp).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })

    return output
}

export { useDateFormatter }
