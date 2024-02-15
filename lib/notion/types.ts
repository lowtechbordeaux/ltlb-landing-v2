import type { PageObjectResponse, ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export type Asset = NonNullable<PageObjectResponse['icon']>;
export type AssetRequest =
    | { object: 'page'; field: 'icon'; page: PageObjectResponse }
    | { object: 'page'; field: 'cover'; page: PageObjectResponse }
    | {
        object: 'page';
        field: 'properties';
        propertyName: string;
        propertyIndex?: number;
        page: PageObjectResponse;
    }
    | { object: 'block'; field: 'image'; block: ImageBlockObjectResponse }



export type Property = PageObjectResponse['properties'][string]
export type PropertyOf<T> = Property & { type: T }
export type PropertyType = Property['type']

export type FileType = PropertyOf<'files'>['files'][0] | ImageBlockObjectResponse['image'] | PageObjectResponse['cover']
