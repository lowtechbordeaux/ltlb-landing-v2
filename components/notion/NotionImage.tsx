import { AssetRequest } from "@/lib/notion";

type NotionImageProps = {
    assetRequest: AssetRequest
    className?: string
}

export default async function NotionImage({ assetRequest, className }: NotionImageProps) {
    // Always re-ask for the page or block to get the recent signed urls

    let pageOrBlock, url, file

    if (assetRequest.object === 'page') {
        pageOrBlock = assetRequest.page

        if (assetRequest.field === 'properties') {
            const files = pageOrBlock.properties[assetRequest.propertyName]
            if (files.type !== 'files') throw new Error('NotionImage: wrong property passed ' + assetRequest.propertyName)
            file = files.files[assetRequest.propertyIndex || 0]
        } else if (assetRequest.field === 'cover') {
            file = pageOrBlock.cover
        } else {
            throw new Error('NotionImage: page object does not support field ' + assetRequest.field)
        }
    } else if (assetRequest.object === 'block') {
        pageOrBlock = assetRequest.block

        if (pageOrBlock.type !== 'image') {
            throw new Error('NotionImage: block object is not an image')
        }

        file = pageOrBlock.image
    }
    if (!file) return null

    if (file.type === 'external') {
        url = file.external.url
    }
    if (file.type === 'file') {
        url = file.file.url
    }

    const alt = 'name' in file ? file.name : url
    return (
        <img src={url} alt={alt} className={className} />
    )
}