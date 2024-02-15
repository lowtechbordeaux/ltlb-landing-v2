import type { PageObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import type { Property, PropertyType, PropertyOf, FileType } from './types'

export function getProperty<T extends PropertyType>(page: PageObjectResponse, name: string, type: T): PropertyOf<T> {
    const property = page.properties[name] as Property & { type: T }
    if (type !== property.type) {
        throw new Error(`Property ${name} is not of type ${type}`)
    }
    return property
}

export function reduceRichText(richText: Array<RichTextItemResponse>) {
    return richText.reduce((str: string, item: RichTextItemResponse) => str += item.plain_text, '')
}
export function reduceRichTextProperty(page: PageObjectResponse, name: string): string {
    const property = getProperty(page, name, 'rich_text')
    return reduceRichText(property.rich_text)
}

export function getFileUrl(file: FileType) {
    if (!file) {
        throw new Error('No file')
    }
    else if (file.type === 'external') {
        return file.external.url
    } else if (file.type === 'file') {
        return file.file.url
    } else {
        throw new Error('Unknown file type')
    }
}