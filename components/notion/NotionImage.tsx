import { AssetRequest, FileType, getFileUrl } from "@/lib/notion";

type NotionImageProps = {
    assetRequest: AssetRequest
    defaultImage?: string
    className?: string
}

export default async function NotionImage({ assetRequest, className, defaultImage }: NotionImageProps) {
    // Always re-ask for the page or block to get the recent signed urls

    let file: FileType = null

    if (assetRequest.object === 'page') {
        if (assetRequest.field === 'properties') {
            const files = assetRequest.page.properties[assetRequest.propertyName]
            if (files.type !== 'files') throw new Error('NotionImage: wrong property passed ' + assetRequest.propertyName)
            file = files.files[assetRequest.propertyIndex || 0]
        } else if (assetRequest.field === 'cover') {
            file = assetRequest.page.cover
        } else {
            throw new Error('NotionImage: page object does not support field ' + assetRequest.field)
        }
    } else if (assetRequest.object === 'block') {
        if (assetRequest.block.type !== 'image') {
            throw new Error('NotionImage: block object is not an image')
        }

        file = assetRequest.block.image
    }

    let url = defaultImage
    let alt = url

    if (file) {
        url = getFileUrl(file)
        if ('name' in file)
            alt = file.name
    }

    return (
        <img src={url} alt={alt} className={className} />
    )
}