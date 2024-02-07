import { reduceRichText } from "@/lib/notion"
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { NotionImage } from "@/components/notion";

export default function NotionBlock({ block, className }: { block: BlockObjectResponse, className?: string }) {
    switch (block.type) {
        case 'paragraph': {
            return <p className={className}>{reduceRichText(block.paragraph.rich_text)}</p>
        }
        case 'heading_1': {
            return <h1 className={className}>{reduceRichText(block.heading_1.rich_text)}</h1>
        }
        case 'heading_2': {
            return <h2 className={className}>{reduceRichText(block.heading_2.rich_text)}</h2>
        }
        case 'heading_3': {
            return <h3 className={className}>{reduceRichText(block.heading_3.rich_text)}</h3>
        }
        case 'image': {
            return (
                <NotionImage
                    assetRequest={{
                        object: 'block',
                        block: block,
                        field: 'image'
                    }}
                    className={className}
                />
            )
        }
    }

    return (
        <span className="text-red-500">
            Notion block type {block.type} is not supported
        </span>
    )
}