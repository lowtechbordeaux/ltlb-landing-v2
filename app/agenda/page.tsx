import { queryDatabase, getPageContent, NOTION_PAGE_CACHE_TIME } from "@/lib/notion";
import type { DatePropertyItemObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { NotionBlock, NotionAsset } from "@/components/notion";

import dayjs from "dayjs"

export const revalidate = NOTION_PAGE_CACHE_TIME

async function getAgendaData(past: boolean = false) {
  const dateFilter = past ?
    {
      before: new Date().toISOString()
    }
    :
    {
      on_or_after: new Date().toISOString()
    }

  const data = await queryDatabase(
    process.env.AGENDA_DB_ID || '',
    {
      "and": [
        {
          property: 'published',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'Date',
          date: dateFilter
        }
      ]
    },
    [
      {
        property: 'Date',
        direction: past ? 'descending' : 'ascending'
      }
    ]
  );

  return data;
}

function formatDate(date: DatePropertyItemObjectResponse['date']) {

  return dayjs(date.start).format('DD/MM/YYYY')
}

async function EventRow({
  event
}: {
  event: PageObjectResponse
}) {

  const blocks = await getPageContent(event.id);

  return (
    <div
      className='w-full border flex flex-col px-4 py-6'
    >
      <div className='flex flex-row justify-between'>
        <div>
          <h1>
            <NotionAsset
              assetRequest={{
                object: 'page',
                page: event,
                field: 'icon',
              }}
              defaultIcon="📅"
              className="mr-2"
            />
            <NotionAsset
              assetRequest={{
                object: 'page',
                page: event,
                field: 'properties',
                propertyName: 'Nom'
              }}
            />
          </h1>
        </div>

        <div className="text-slate-500 text-sm text-end">
          <p className="italic font-semibold">Date</p>
          <p className="">
            <NotionAsset
              assetRequest={{
                object: 'page',
                page: event,
                field: 'properties',
                propertyName: 'Date',
              }}
              dateFormat={{
                dateFormat: 'DD/MM/YYYY',
                hourFormat: 'HH[h]mm',
                textStart: 'Du',
                textEnd: 'au',
                textHour: 'à',
              }}
            />
          </p>
          <p className="italic font-semibold">Lieu</p>
          <p className="">
            <NotionAsset
              assetRequest={{
                object: 'page',
                page: event,
                field: 'properties',
                propertyName: 'Lieu'
              }}
            />
          </p>
        </div>
      </div>

      <NotionAsset
        assetRequest={{
          object: 'page',
          page: event,
          field: 'cover',
        }}
        className="w-full my-2"
      />
      <NotionAsset
        assetRequest={{
          object: 'page',
          page: event,
          field: 'properties',
          propertyName: 'image'
        }}
        className="w-full my-2"
      />

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


export default async function Projets() {
  const nextEvents = await getAgendaData()
  const pastEvents = await getAgendaData(true)

  return (
    <main className='flex flex-col items-center'>
      <h2 className='my-4'>
        Agenda
      </h2>

      <div className='w-full max-w-2xl'>
        <h3 className="font-bold ml-4 mb-2">À venir</h3>
        <div className="w-full">
          {nextEvents.map((event) => (
            <EventRow event={event} key={event.id} />
          ))}
        </div>

        <h3 className="font-bold ml-4 mb-2 mt-8">Passés</h3>
        <div className="w-full">
          {pastEvents.map((event) => (
            <EventRow event={event} key={event.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
