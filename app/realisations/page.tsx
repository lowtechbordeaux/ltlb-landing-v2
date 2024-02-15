import { queryDatabase, NOTION_PAGE_CACHE_TIME, reduceRichTextProperty } from "@/lib/notion";
import { NotionAsset } from "@/components/notion";
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Réalisations - Low-tech Lab Bordeaux",
  description: "Low Techs réalisées au sein du Low-tech Lab Bordeaux",
};

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
    <div className='flex flex-col items-center'>
      <h2>
        Low-techs réalisées
      </h2>

      <div className='flex flex-col space-y-4 w-full max-w-md items-center'>
        {lowtechs.length ?
          lowtechs.map((item) => (
            <Link href={`/realisations/${reduceRichTextProperty(item, 'slug')}`} key={item.id}
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
                    defaultImage={`https://placehold.co/300x300?text=${reduceRichTextProperty(item, 'slug')}`}
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
            </Link>
          ))
          :
          <p className="text-center">Aucun element à afficher</p>
        }
      </div>
    </div>
  );
}
