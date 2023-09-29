function useContentLinkHandler() {
    const localePath = useLocalePath()

    function replaceLinks(html: string) {
        const regex = /<a href="(https?:\/\/|\/)?(.*?)">([^<]+)<\/a>/g
        const replacedHtml = html.replace(regex, (_: any, protocol: string, url: string, text: any) => {
            if (protocol === 'http://' || protocol === 'https://') {
                return `<a href="${protocol}${url}" target="_blank" rel="noopener">${text}</a>`
            } else {
                const newUrl = localePath('/' + url)
                return `<a href="${newUrl}">${text}</a>`
            }
        })

        return replacedHtml
    }

    return {
        replaceLinks
    }
}

export { useContentLinkHandler }
