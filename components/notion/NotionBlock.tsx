import { reduceRichText } from "@/lib/notion"
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export default function NotionBlock({ block }: { block: BlockObjectResponse }) {
    switch (block.type) {
        case 'paragraph': {
            return <p>{reduceRichText(block.paragraph.rich_text)}</p>
        }
        case 'heading_1': {
            return <h1>{reduceRichText(block.heading_1.rich_text)}</h1>
        }
        case 'heading_2': {
            return <h2>{reduceRichText(block.heading_2.rich_text)}</h2>
        }
        case 'heading_3': {
            return <h3>{reduceRichText(block.heading_3.rich_text)}</h3>
        }
    }

    return (
        <span className="text-red-500">
            Notion block type {block.type} is not supported
        </span>
    )
}