import NotionProperty from "@/components/notion/NotionProperty";
import { queryDatabase, getPageContent, getPage, renderPageProperty } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Link from "next/link";
import NotionBlock from "@/components/notion/NotionBlock";

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
        direction: 'ascending'
      }
    ]
  );

  return data;
}

async function EventRow({
  event
}: {
  event: PageObjectResponse
}) {

  const page = await getPage(event.id);
  const blocks = await getPageContent(event.id);

  return (
    <Link
      href={`/agenda/${event.id}`}
    >
      <div
        className='w-full border flex w-full px-4 py-4 hover:bg-tradewind-50 cursor-pointer'
      >
        <div className='flex items-center mr-4'>
        </div>
        <div className='flex-1 flex flex-col'>
          <h1>
            <NotionProperty property={event.properties['Nom']} />
          </h1>
          <p className="text-slate-500 text-end">
            Le <NotionProperty property={event.properties['Date']} />
          </p>
          <p className="text-slate-500 text-end">
            Lieu: <NotionProperty property={event.properties['Lieu']} />
          </p>

          <div className="flex flex-col">
            {blocks.map((block) => (<NotionBlock key={block.id} block={block} />))}
          </div>
        </div>
      </div>
    </Link >
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

      <h3>À venir</h3>
      <div className="w-full max-w-lg">
        {nextEvents.map((event) => (
          <EventRow event={event} key={event.id} />
        ))}
      </div>

      <h3 className="mt-4 font-bold">Passés</h3>
      <div className="w-full max-w-lg">
        {pastEvents.map((event) => (
          <EventRow event={event} key={event.id} />
        ))}
      </div>
    </main>
  );
}
