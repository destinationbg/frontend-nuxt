function kebabToCamelCase(str: string) {
    return str.replace(/-([a-z])/g, function (match, letter: string) {
        return letter.toUpperCase()
    })
}

export { kebabToCamelCase }
