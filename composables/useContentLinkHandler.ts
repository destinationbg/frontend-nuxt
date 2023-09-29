function useContentLinkHandler() {
    const localePath = useLocalePath()

    function replaceLinks(html: string) {
        const regex = /<a href="(https?:\/\/|\/)?(.*?)">([^<]+)<\/a>/g
        const replacedHtml = html.replace(regex, (_: any, protocol: string, url: string, text: any) => {
            if (protocol === 'http://' || protocol === 'https://') {
                console.log(protocol + url)
                return `<a href="${protocol}${url}" target="_blank" rel="noopener">${text}</a>`
            } else {
                const newUrl = localePath('/' + url)
                console.log('/' + url, newUrl)
                return `<a href="${newUrl}" target="_blank" rel="noopener">${text}</a>`
            }
        })

        return replacedHtml
    }

    return {
        replaceLinks
    }
}

export { useContentLinkHandler }
