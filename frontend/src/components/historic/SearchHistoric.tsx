import { z } from "zod";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState, ChangeEvent } from "react";

import { HistoricItem } from "@api/history";
import {
  useHistoric,
  useSetMyHistoric,
  useRemoveFromHistoric,
} from "@states/useHistoric";
import { uploadJson } from "@utils/upload.util";
import { downloadJson } from "@utils/download.util";

import { SearchHistoricList } from "@components/historic/SearchHistoricList";
import { SearchHistoricListItem } from "@components/historic/SearchHistoricListItem";
import { SearchHistoricListEmpty } from "@components/historic/SearchHistoricListEmpty";

const myHistoricSchema = z.record(
  z.object({
    id: z.string(),
    query: z.string(),
    createdAt: z.coerce.date(),
    lastAccessAt: z.coerce.date(),
    totalRequests: z.number(),
  })
);

export const SearchHistoric = () => {
  const router = useRouter();

  const { data: myHistoric } = useHistoric();
  const { mutateAsync: setMyHistoric } = useSetMyHistoric();
  const { mutateAsync: removeFromHistoric } = useRemoveFromHistoric();

  const [historicItems, setHistoricItems] = useState<HistoricItem[]>([]);

  useEffect(() => {
    if (myHistoric) {
      const historic = Object.values(myHistoric).map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        lastAccessAt: new Date(item.lastAccessAt),
      }));

      historic.sort((a, b) => {
        return b.lastAccessAt.getTime() - a.lastAccessAt.getTime();
      });
      setHistoricItems(historic.slice(0, 5));
    }
  }, [myHistoric]);

  const openHistoryItem = (query: string) => {
    router.navigate({
      to: "/results",
      search: {
        ...router.latestLocation.search,
        query: query,
      },
    });
  };

  const removeHistoryItem = async (id: string) => {
    await removeFromHistoric(id);
  };

  const downloadHistory = () => {
    if (!myHistoric) {
      return;
    }

    downloadJson(myHistoric, `search-history-${new Date().getTime()}`);
  };

  const uploadHistory = async (event: ChangeEvent<HTMLInputElement>) => {
    const importedHistory = await uploadJson<typeof myHistoric>(
      event.target.files
    );

    const myHistoricSchemaResult = myHistoricSchema.safeParse(importedHistory);

    if (myHistoricSchemaResult.success) {
      setMyHistoric(myHistoricSchemaResult.data);
    } else {
      console.error(myHistoricSchemaResult.error);
    }
  };

  return (
    <div className="flex flex-col w-80 p-2 bg-base-100 h-full">
      <div className="flex flex-col gap-2 p-2">
        <div className="text-xl font-light opacity-60">My History</div>
        <div className="text-sm opacity-50">
          Your search history is saved locally on your computer only. Below are
          your 5 most recently accessed searches. You can export your complete
          history to a JSON file or import from a previously exported file.
        </div>
        <div className="join join-horizontal flex justify-stretch">
          <label
            htmlFor="upload-history"
            className="btn join-item flex-auto btn-warning"
          >
            Import
            <input
              id="upload-history"
              type="file"
              accept=".json"
              className="hidden"
              onChange={uploadHistory}
            />
          </label>
          <button
            className="btn join-item flex-auto btn-info"
            onClick={downloadHistory}
            disabled={historicItems.length === 0}
          >
            Export
          </button>
        </div>
      </div>
      <SearchHistoricList className="w-full mt-4">
        {historicItems.length === 0 && <SearchHistoricListEmpty />}
        {historicItems.map((historyItem) => (
          <SearchHistoricListItem
            key={historyItem.id}
            historyItem={historyItem}
            openQueryResult={openHistoryItem}
            removeHistoryItem={removeHistoryItem}
          />
        ))}
      </SearchHistoricList>
    </div>
  );
};
