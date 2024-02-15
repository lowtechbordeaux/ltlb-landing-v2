import { queryDatabase, getPageContent, NOTION_PAGE_CACHE_TIME, reduceRichText, reduceRichTextProperty, getProperty, getFileUrl } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { NotionBlock, NotionAsset } from "@/components/notion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Metadata } from 'next';

export const revalidate = NOTION_PAGE_CACHE_TIME

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const lowtech = await getLowTechData(params.slug)

  const title = reduceRichText(getProperty(lowtech, 'Nom', 'title').title)
  const images = getProperty(lowtech, 'Images', 'files').files
    .map(f => getFileUrl(f)).filter(f => !!f) as string[]

  return {
    title,
    openGraph: {
      images, // TODO images from notion won't work after 1 hour, may be problematic for SEO's cache
    },
  }
}

export async function generateStaticParams() {
  const data = await queryDatabase(
    process.env.LOW_TECHS_DB_ID || '',
    {
      "and": [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
      ]
    },
  );

  return data.map(page => reduceRichTextProperty(page, 'slug'));
}

async function getLowTechData(slug: string): Promise<PageObjectResponse> {
  const data = await queryDatabase(
    process.env.LOW_TECHS_DB_ID || '',
    {
      "and": [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'slug',
          rich_text: {
            equals: slug
          },
        },
      ]
    },
  );

  if (!data[0]) {
    throw new Error('No data found')
  }
  return data[0];
}

async function ItemCard({
  item
}: {
  item: PageObjectResponse
}) {

  const blocks = await getPageContent(item.id);

  const images = getProperty(item, 'Images', 'files').files
  return (
    <div
      className='w-full flex flex-col px-4 py-6'
    >
      <h1 className="mb-2">
        <NotionAsset
          assetRequest={{
            object: 'page',
            page: item,
            field: 'properties',
            propertyName: 'Nom'
          }}
        />
      </h1>

      <h3 className="mb-2">
        <NotionAsset
          assetRequest={{
            object: 'page',
            page: item,
            field: 'properties',
            propertyName: 'short_desc'
          }}
        />
      </h3>

      {images.length > 0 && (
        <div className="w-full flex justify-center mt-2 mb-4">
          <Carousel className="max-w-xs">
            <p className="text-center font-italic mb-2">Gallerie</p>
            <CarouselContent>
              {images.map((_, index) => (
                <CarouselItem key={index}>
                  <div className="h-full flex items-center justify-center">
                    <NotionAsset
                      assetRequest={{
                        object: 'page',
                        page: item,
                        field: 'properties',
                        propertyName: 'Images',
                        propertyIndex: index,
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      <div className="flex flex-col space-y-2">
        {blocks.map((block) => (
          <NotionBlock
            key={block.id}
            block={block}
            className="w-full"
          />))}
      </div>
    </div>
  )
}


export default async function LowTechDetail({ params }: { params: { slug: string } }) {
  const lowtech = await getLowTechData(params.slug)

  return (
    <main className='flex flex-col items-center'>
      <h2>
        Low-tech réalisée
      </h2>

      <div className='w-full max-w-2xl'>
        <div className="w-full border divide-y">
          <ItemCard item={lowtech} />
        </div>
      </div>
    </main>
  );
}
