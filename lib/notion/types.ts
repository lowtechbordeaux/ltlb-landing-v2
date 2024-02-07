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

export type AssetRequestLight =
    | { object: 'page'; field: 'icon'; id: string }
    | { object: 'page'; field: 'cover'; id: string }
    | {
        object: 'page';
        field: 'properties';
        propertyName: string;
        propertyIndex?: number;
        id: string;
    }
    | { object: 'block'; field: 'image'; id: string }
