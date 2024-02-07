import { reduceRichText } from "@/lib/notion"
import type { BlockObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import { NotionImage } from "@/components/notion";
import clsx from "clsx";
import { ConditionalWrapper } from "@/lib/utils";

function NotionRichText({ rich_text, className }: { rich_text: Array<RichTextItemResponse>, className?: string }) {
    return rich_text.map(r1 => (
        <ConditionalWrapper
            wrapper={r1.href && (children => (<a href={r1.href || ''} className="underline">{children}</a>))} key={r1.plain_text}
        >
            <span className={className}>{r1.plain_text}</span>
        </ ConditionalWrapper >
    ))
}

export default function NotionBlock({ block, className }: { block: BlockObjectResponse, className?: string }) {
    switch (block.type) {
        case 'paragraph': {
            return (
                <p className={className}>
                    <NotionRichText rich_text={block.paragraph.rich_text} />
                </p>
            )
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
        case 'bulleted_list_item': {
            return <span className={clsx("ml-2", className)}> - {reduceRichText(block.bulleted_list_item.rich_text)}</span>
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

    console.log(block)
    return (
        <span className="text-red-500">
            Notion block type {block.type} is not supported
        </span>
    )
}