export type SuggestionsOptions = {
  query: string;
};

export interface SuggestionsResult {
  phrase: string;
}

export interface SuggestionsResults {
  nextOffset: null;
  results: SuggestionsResult[];
}

export const getSuggestionsResults = async ({ query }: SuggestionsOptions) => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/search/suggestions`);
  url.searchParams.set("query", query);
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch suggestions results");
  }

  const data = await response.json();
  return data as SuggestionsResults;
};
