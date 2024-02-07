import { queryDatabase, NOTION_PAGE_CACHE_TIME, reduceRichTextProperty } from "@/lib/notion";
import { NotionAsset } from "@/components/notion";
import Link from 'next/link'

export const revalidate = NOTION_PAGE_CACHE_TIME

async function getLowTechsData() {
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

  return data;
}

export default async function LowTechs() {
  const lowtechs = await getLowTechsData()

  return (
    <main className='flex flex-col items-center'>
      <h2 className='my-4'>
        Low-techs réalisées
      </h2>

      <div className='flex flex-col space-y-4 w-full max-w-xl items-center'>
        {lowtechs.length ?
          lowtechs.map((item) => (
            <Link href={`/low-techs/${reduceRichTextProperty(item, 'slug')}`} key={item.id}>
              <div
                className="border flex w-full px-4 py-4 hover:bg-tradewind-50 cursor-pointer"
              >
                <div className='flex items-center mr-4'>
                  <div className='w-32 h-32 relative'>
                    <NotionAsset
                      assetRequest={{
                        page: item,
                        object: 'page',
                        field: 'properties',
                        propertyName: 'Images',
                        propertyIndex: 0
                      }}
                      className="w-full h-full object-cover"
                      defaultImage="/images/placeholder.png"
                    />
                  </div>
                </div>
                <div className='flex-1 flex flex-col'>
                  <p className="font-semibold">
                    <NotionAsset
                      assetRequest={{
                        object: 'page',
                        page: item,
                        field: 'properties',
                        propertyName: 'Nom'
                      }}
                    />
                  </p>
                  <p className="text-slate-500">
                    <NotionAsset
                      assetRequest={{
                        object: 'page',
                        page: item,
                        field: 'properties',
                        propertyName: 'short_desc'
                      }}
                    />
                  </p>
                </div>
              </div>
            </Link>
          ))
          :
          <p className="text-center">Aucun element à afficher</p>
        }
      </div>
    </main>
  );
}
