import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export function pageHasImage(property: PageObjectResponse['properties'][1]) {
    return property.type == 'files' && property.files && property.files.length > 0
}

export default function NotionImage({ property, className }: {
    property: PageObjectResponse['properties'][1],
    className?: string
}) {
    if (!pageHasImage(property) || property.type !== 'files') {
        throw new Error('NotionImage property doesn\'t have image')
    }

    const firstFile = property.files[0]
    let url

    if (firstFile.type === 'external') {
        url = firstFile.external.url
    }
    if (firstFile.type === 'file') {
        url = firstFile.file.url
    }

    return (
        <img src={url} alt={firstFile.name} className={className} />
    )
}