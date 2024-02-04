import type { PageObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

export function reduceRichText(richText: Array<RichTextItemResponse>) {
    return richText.reduce((str: string, item: RichTextItemResponse) => str += item.plain_text, '')
}

export function renderPageProperty(page: PageObjectResponse, propertyKey: string): string {
    //const property = getPageProperty(page, propertyKey)
    const pageForced = page as PageObjectResponse;
    const property = pageForced.properties[propertyKey]

    switch (property.type) {
        case "rich_text": {
            return reduceRichText(property.rich_text)
        }
        case "title": {
            return reduceRichText(property.title)
        }
        case "date": {
            if (!property.date) throw Error('date property is empty')
            if (!property.date.start && !property.date.end) {
                return `${property.date.start} - ${property.date.end}`

            }
            return property.date.start
        }
        default: {
            throw new Error('unsupported property type')
        }
    }
}

export function renderPageEmoji(page: PageObjectResponse, defaultEmoji = '📄'): string {
    if (!page.icon || page.icon.type !== 'emoji')
        return defaultEmoji
    return page.icon.emoji
}