export enum SafeSearchType {
  OFF = "OFF",
  STRICT = "STRICT",
  MODERATE = "MODERATE",
}
export interface SearchOptions {
  query: string;
  locale: string;
  safeSearch: SafeSearchType;
  offset?: number;
}

export interface SearchResult {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface SearchResults {
  nextOffset: number | null;
  results: SearchResult[];
}

export const getSearchResults = async ({
  query,
  locale,
  safeSearch,
  offset,
}: SearchOptions) => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/search`);

  url.searchParams.set("query", query);
  url.searchParams.set("locale", locale);
  url.searchParams.set("safeSearch", safeSearch);

  if (offset) {
    url.searchParams.set("offset", offset.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();
  return data as SearchResults;
};
