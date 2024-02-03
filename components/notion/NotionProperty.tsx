import { reduceRichText } from "@/lib/notion"
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export default function NotionBlock({ property }: { property: PageObjectResponse['properties'][1] }) {
    switch (property.type) {
        case 'number': {
            return <span>{property.number}</span>
        }
        case 'url': {
            return <span>{property.url}</span>
        }
        case 'email': {
            return <span>{property.email}</span>
        }
        case 'phone_number': {
            return <span>{property.phone_number}</span>
        }
        case 'checkbox': {
            return <input type="checkbox" checked={property.checkbox} />
        }
        case 'title': {
            return <span>{reduceRichText(property.title)}</span>
        }
        case 'date': {
            if (!property.date) throw Error('date property is empty')
            if (property.date.start && property.date.end) {
                return <span>{property.date.start} - ${property.date.end}</span>

            }
            return <span>{new Date(property.date.start).toLocaleString('fr-FR')}</span>
        }
        case 'rich_text': {
            return <span>{reduceRichText(property.rich_text)}</span>
        }
    }

    return (
        <span className="text-red-500">
            Notion property type {property.type} is not supported
        </span>
    )
}