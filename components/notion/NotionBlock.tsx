import { reduceRichText } from "@/lib/notion"
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

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
            let url
            if (block.image.type === 'external') {
                url = block.image.external.url
            }
            if (block.image.type === 'file') {
                url = block.image.file.url
            }
            return <img className={className} src={url} alt="notion block image" />
        }
    }

    return (
        <span className="text-red-500">
            Notion block type {block.type} is not supported
        </span>
    )
}