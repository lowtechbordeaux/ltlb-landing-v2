import { AssetRequest, reduceRichText } from "@/lib/notion"
import NotionImage from "./NotionImage"

type NotionAssetProps = {
    assetRequest: AssetRequest
    className?: string,
    defaultIcon?: string
}

export default async function NotionAsset({ assetRequest, className, defaultIcon }: NotionAssetProps) {
    if (assetRequest.object !== 'page') {
        throw new Error('NotionAsset: object type ' + assetRequest.object + ' is not supported')
    }

    const page = assetRequest.page

    switch (assetRequest.field) {
        case 'properties': {
            const property = page.properties[assetRequest.propertyName]
            switch (property.type) {
                case 'number': {
                    return <span className={className}>{property.number}</span>
                }
                case 'url': {
                    return <span className={className}>{property.url}</span>
                }
                case 'email': {
                    return <span className={className}>{property.email}</span>
                }
                case 'phone_number': {
                    return <span className={className}>{property.phone_number}</span>
                }
                case 'checkbox': {
                    return <input type="checkbox" checked={property.checkbox} className={className} />
                }
                case 'title': {
                    return <span className={className}>{reduceRichText(property.title)}</span>
                }
                case 'files': {
                    return <NotionImage assetRequest={assetRequest} className={className} />
                }
                case 'date': {
                    if (!property.date) throw Error('date property is empty')
                    if (property.date.start && property.date.end) {
                        return <span>{property.date.start} - ${property.date.end}</span>

                    }
                    return <span className={className}>{new Date(property.date.start).toLocaleString('fr-FR')}</span>
                }
                case 'rich_text': {
                    return <span className={className}>{reduceRichText(property.rich_text)}</span>
                }
            }
        }
        case 'icon': {
            if (!page.icon) return <span className={className}>{defaultIcon || ' '}</span>

            if (page.icon.type === 'emoji')
                return <span className={className}>{page.icon.emoji}</span>

            return <NotionImage assetRequest={assetRequest} className={className} />
        }
        case 'cover': {
            return <NotionImage assetRequest={assetRequest} className={className} />
        }
    }
}