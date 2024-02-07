import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

export function reduceRichText(richText: Array<RichTextItemResponse>) {
    return richText.reduce((str: string, item: RichTextItemResponse) => str += item.plain_text, '')
}
