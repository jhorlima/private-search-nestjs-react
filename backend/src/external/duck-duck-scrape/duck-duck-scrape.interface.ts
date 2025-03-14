import { SearchResult, AutocompleteResult } from 'duck-duck-scrape';

export enum DuckDuckScrapeSafeSearch {
  OFF = 'OFF',
  STRICT = 'STRICT',
  MODERATE = 'MODERATE',
}

export interface DuckDuckScrapeSearchOptions {
  query: string;
  locale: string;
  offset: number;
  safeSearchType: DuckDuckScrapeSafeSearch;
}

export interface DuckDuckScrapeAutocompleteOptions {
  query: string;
}

export type DuckDuckScrapeSearchResult = SearchResult;
export type DuckDuckScrapeAutocompleteResult = AutocompleteResult;
