import { AssetRequest, reduceRichText } from "@/lib/notion"
import { NotionImage } from "@/components/notion";
import dayjs from "dayjs"

type NotionAssetProps = {
    assetRequest: AssetRequest
    className?: string,
    defaultIcon?: string,
    defaultImage?: string,
    dateFormat?: {
        dateFormat: string,
        hourFormat?: string,
        textStart?: string,
        textEnd?: string,
        textHour?: string,
    }
}

export default async function NotionAsset({ assetRequest, className, defaultIcon, dateFormat, defaultImage }: NotionAssetProps) {
    if (assetRequest.object !== 'page') {
        throw new Error('NotionAsset: object type ' + assetRequest.object + ' is not supported')
    }

    const page = assetRequest.page

    switch (assetRequest.field) {
        case 'properties': {
            const property = page.properties[assetRequest.propertyName]
            if (!property) throw new Error('NotionAsset: property ' + assetRequest.propertyName + ' not found')
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
                    return <NotionImage assetRequest={assetRequest} className={className} defaultImage={defaultImage} />
                }
                case 'date': {
                    if (!property.date) throw Error('date property is empty')

                    const dateStart = dayjs(property.date.start).format(dateFormat?.dateFormat || 'DD/MM/YYYY')
                    const hourStart = dayjs(property.date.start).hour() !== 0 &&
                        dayjs(property.date.start).format(dateFormat?.hourFormat || 'hh:mm A')

                    let content
                    if (!property.date.end) {
                        content = dateStart
                        if (hourStart) content += ` ${dateFormat?.textHour || 'at'} ${hourStart}`
                    } else {

                        const dateEnd = dayjs(property.date.end).format(dateFormat?.dateFormat || 'DD/MM/YYYY')
                        const hourEnd = dayjs(property.date.end).hour() !== 0 &&
                            dayjs(property.date.end).format(dateFormat?.hourFormat || 'hh:mm A')

                        content = `${dateFormat?.textStart || 'From'} ${dateStart}`
                        if (hourStart) content += ` ${dateFormat?.textHour || 'at'} ${hourStart}`
                        content += ` ${dateFormat?.textEnd || 'To'} ${dateEnd}`
                        if (hourEnd) content += ` ${dateFormat?.textHour || 'at'} ${hourEnd}`
                    }
                    return (
                        <span className={className}>
                            {content}
                        </span>
                    )
                }
                case 'rich_text': {
                    const text = reduceRichText(property.rich_text)

                    return text.split('\n').map((line, index) =>
                        <p className={className} key={index}>{line}</p>
                    )
                }
            }
        }
        case 'icon': {
            if (!page.icon) return <span className={className}>{defaultIcon || ' '}</span>

            if (page.icon.type === 'emoji')
                return <span className={className}>{page.icon.emoji}</span>

            return <NotionImage assetRequest={assetRequest} className={className} defaultImage={defaultImage} />
        }
        case 'cover': {
            return <NotionImage assetRequest={assetRequest} className={className} defaultImage={defaultImage} />
        }
    }
}