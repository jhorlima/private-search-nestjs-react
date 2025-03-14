import { Injectable, Logger } from '@nestjs/common';
import { search, SafeSearchType, autocomplete } from 'duck-duck-scrape';

import {
  DuckDuckScrapeSafeSearch,
  DuckDuckScrapeSearchOptions,
  DuckDuckScrapeSearchResult,
  DuckDuckScrapeAutocompleteOptions,
  DuckDuckScrapeAutocompleteResult,
  DuckDuckScraperException,
  DuckDuckScraperNotFoundException,
} from '@/external/duck-duck-scrape';

@Injectable()
export class DuckDuckScrape {
  private readonly logger = new Logger(DuckDuckScrape.name);

  async search({
    query,
    locale,
    offset,
    safeSearchType,
  }: DuckDuckScrapeSearchOptions): Promise<DuckDuckScrapeSearchResult[]> {
    try {
      const safeSearch = this.getSafeSearchType(safeSearchType);

      const searchResults = await search(query, {
        locale,
        offset,
        safeSearch,
      });

      if (searchResults.noResults) {
        throw new DuckDuckScraperNotFoundException('No results found');
      }

      return searchResults.results;
    } catch (error) {
      if (error instanceof DuckDuckScraperException) {
        throw error;
      }
      this.logger.error(error);
      throw new DuckDuckScraperException('Unknown error');
    }
  }

  async autocomplete({
    query,
  }: DuckDuckScrapeAutocompleteOptions): Promise<
    DuckDuckScrapeAutocompleteResult[]
  > {
    try {
      const autocompleteResults = await autocomplete(query);

      if (!autocompleteResults?.length) {
        throw new DuckDuckScraperNotFoundException('No results found');
      }

      return autocompleteResults;
    } catch (error) {
      if (error instanceof DuckDuckScraperException) {
        throw error;
      }
      this.logger.error(error);
      throw new DuckDuckScraperException('Unknown error');
    }
  }

  private getSafeSearchType(
    searchType: DuckDuckScrapeSafeSearch,
  ): SafeSearchType {
    const mapping = {
      [DuckDuckScrapeSafeSearch.OFF]: SafeSearchType.OFF,
      [DuckDuckScrapeSafeSearch.MODERATE]: SafeSearchType.MODERATE,
      [DuckDuckScrapeSafeSearch.STRICT]: SafeSearchType.STRICT,
    };

    return mapping[searchType] ?? SafeSearchType.MODERATE;
  }
}
