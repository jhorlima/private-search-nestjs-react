import { sha1 } from "@utils/sha1.util";

export interface HistoricItem {
  id: string;
  query: string;
  createdAt: Date;
  lastAccessAt: Date;
  totalRequests: number;
}

export const getMyHistoric = (): Promise<Record<string, HistoricItem>> => {
  const myHistoric = localStorage.getItem("my-historic");

  if (!myHistoric) {
    return Promise.resolve({});
  }

  return Promise.resolve(JSON.parse(myHistoric));
};

export const setMyHistoric = (myHistoric: Record<string, HistoricItem>) => {
  localStorage.setItem("my-historic", JSON.stringify(myHistoric));
  return Promise.resolve(myHistoric);
};

export const addToMyHistoric = async (query: string) => {
  const myHistoric = await getMyHistoric();
  const queryHash = await sha1(query);

  const queryHistoric = myHistoric[queryHash];

  if (queryHistoric) {
    myHistoric[queryHash] = {
      ...queryHistoric,
      lastAccessAt: new Date(),
      totalRequests: queryHistoric.totalRequests + 1,
    };
  } else {
    const newQueryHistoric = {
      id: queryHash,
      query,
      createdAt: new Date(),
      lastAccessAt: new Date(),
      totalRequests: 1,
    };
    myHistoric[queryHash] = newQueryHistoric;
  }

  await setMyHistoric(myHistoric);

  return myHistoric[queryHash];
};

export const removeFromMyHistoric = async (id: string) => {
  const myHistoric = await getMyHistoric();
  delete myHistoric[id];
  await setMyHistoric(myHistoric);
  return id;
};
