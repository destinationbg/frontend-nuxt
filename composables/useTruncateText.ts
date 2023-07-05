function useTruncateText(string: string, maxLength: number) {
    if (string.length <= maxLength) return string

    const text = string.substring(0, maxLength - 1)
    const lastSpaceIndex = text.lastIndexOf(' ')

    return `${text.substring(0, lastSpaceIndex)}&hellip;`
}

export { useTruncateText }
