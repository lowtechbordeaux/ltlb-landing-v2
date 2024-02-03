import { Client, isFullBlock, isFullPage, isFullPageOrDatabase } from "@notionhq/client"
import type { QueryDatabaseParameters, PageObjectResponse, RichTextItemResponse, DatabaseObjectResponse, BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function queryDatabase(databaseId: string, filter?: QueryDatabaseParameters["filter"], sorts?: QueryDatabaseParameters["sorts"]): Promise<Array<PageObjectResponse>> {
    const databaseContent = await notion.databases.query({
        database_id: databaseId,
        filter,
        sorts,
    })

    // When does results are of DatabaseObject type ?
    const fullObjects: Array<PageObjectResponse> = databaseContent.results.filter(isFullPage);
    return fullObjects;
}

export async function getPage(pageId: string): Promise<PageObjectResponse> {
    const page = await notion.pages.retrieve({ page_id: pageId });
    if (!isFullPage(page)) {
        throw new Error('didnot receive full page')
    }
    return page;
}
export async function getPageContent(pageId: string): Promise<Array<BlockObjectResponse>> {
    const blockList = await notion.blocks.children.list({ block_id: pageId });
    return blockList.results.filter(isFullBlock);
}

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
