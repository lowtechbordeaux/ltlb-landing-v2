import {
  queryDatabase,
  getPageContent,
  NOTION_PAGE_CACHE_TIME,
} from "@/lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock, NotionAsset } from "@/components/notion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda - Low-tech Lab Bordeaux",
  description: "Les évenement organisés par le Low-tech Lab Bordeaux",
};

export const revalidate = NOTION_PAGE_CACHE_TIME;

async function getAgendaData(past: boolean = false) {
  const dateFilter = past
    ? {
        before: new Date().toISOString(),
      }
    : {
        on_or_after: new Date().toISOString(),
      };

  const data = await queryDatabase(
    process.env.AGENDA_DB_ID || "",
    {
      and: [
        {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Date",
          date: dateFilter,
        },
      ],
    },
    [
      {
        property: "Date",
        direction: past ? "descending" : "ascending",
      },
    ]
  );

  return data;
}

async function EventRow({ event }: { event: PageObjectResponse }) {
  const blocks = await getPageContent(event.id);

  return (
    <div className="w-full flex flex-col px-4 py-6">
      <div className="flex  flex-row justify-between">
        <div className="flex">
          <div className="flex flex-col justify-center h-full">
            <NotionAsset
              assetRequest={{
                object: "page",
                page: event,
                field: "icon",
              }}
              defaultIcon="📅"
              className="mr-2"
            />
          </div>
          <div>
            <h1>
              <NotionAsset
                assetRequest={{
                  object: "page",
                  page: event,
                  field: "properties",
                  propertyName: "Nom",
                }}
              />
            </h1>
            <h2 className="m-0">
              <NotionAsset
                assetRequest={{
                  object: "page",
                  page: event,
                  field: "properties",
                  propertyName: "Date",
                }}
                dateFormat={{
                  dateFormat: "DD/MM/YYYY",
                  hourFormat: "HH[h]mm",
                  textStart: "Du",
                  textEnd: "au",
                  textHour: "à",
                }}
              />
            </h2>
          </div>
        </div>

        <div className="flex items-center text-white-800 text-sm text-end">
          <div>
            <NotionAsset
              assetRequest={{
                object: "page",
                page: event,
                field: "properties",
                propertyName: "Lieu",
              }}
              className="p-0 m-0"
            />
          </div>
        </div>
      </div>

      <NotionAsset
        assetRequest={{
          object: "page",
          page: event,
          field: "cover",
        }}
        className="w-full my-2"
      />

      <div className="flex flex-col space-y-2">
        {blocks.map((block) => (
          <NotionBlock key={block.id} block={block} className="w-full" />
        ))}
      </div>
    </div>
  );
}

export default async function Agenda() {
  const nextEvents = await getAgendaData();
  const pastEvents = await getAgendaData(true);

  return (
    <div className="flex w-full flex-col items-center text-background">
      <h2 className="w-full m-0 bg-persian-green-800 py-4 text-center text-background">
        Événements à venir
      </h2>

      <div className="w-full flex justify-center bg-persian-green-600">
        <div className="w-full max-w-2xl divide-y">
          {nextEvents.length ? (
            nextEvents.map((event) => <EventRow event={event} key={event.id} />)
          ) : (
            <p className="text-center py-4">Aucun évenement à venir</p>
          )}
        </div>
      </div>

      <h2 className="w-full m-0 bg-persian-green-800 py-4 text-center text-background">
        Événements passés
      </h2>

      <div className="w-full flex justify-center bg-persian-green-500">
        <div className="w-full max-w-2xl">
          {pastEvents.length ? (
            pastEvents.map((event) => <EventRow event={event} key={event.id} />)
          ) : (
            <p className="text-center py-4">Aucun évenement passé</p>
          )}
        </div>
      </div>
    </div>
  );
}
