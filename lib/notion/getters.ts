import { Client, isFullBlock, isFullPage } from "@notionhq/client"
import type { QueryDatabaseParameters, PageObjectResponse, BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

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
