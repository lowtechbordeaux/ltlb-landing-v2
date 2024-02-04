import NotionProperty from "@/components/notion/NotionProperty";
import { queryDatabase, getPageContent, renderPageEmoji } from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import NotionBlock from "@/components/notion/NotionBlock";
import NotionImage, { pageHasImage } from "@/components/notion/NotionImage";

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

  const blocks = await getPageContent(event.id);

  return (
    <div
      className='w-full border flex px-4 py-6 cursor-pointer'
    >
      <div className='flex items-center mr-4'>
      </div>
      <div className='flex-1 flex flex-col'>
        <h1>
          <span className="mr-2">{renderPageEmoji(event, '📅')}</span>
          <NotionProperty property={event.properties['Nom']} />
        </h1>
        <p className="text-slate-500 text-end">
          Le <NotionProperty property={event.properties['Date']} />
        </p>
        <p className="text-slate-500 text-end">
          Lieu: <NotionProperty property={event.properties['Lieu']} />
        </p>
        {pageHasImage(event.properties['image']) &&
          <NotionImage
            property={event.properties['image']}
            className="w-full my-2"
          />
        }

        <div className="flex flex-col">
          {blocks.map((block) => (
            <NotionBlock
              key={block.id}
              block={block}
              className="w-full"
            />))}
        </div>
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
