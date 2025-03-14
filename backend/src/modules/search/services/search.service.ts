import { Injectable } from '@nestjs/common';

import { DuckDuckScrape } from '@/external/duck-duck-scrape';

import { SearchOptionsDto } from '@search/dto/search-options.dto';
import { SuggestionsOptionsDto } from '@search/dto/suggestions-options.dto';

@Injectable()
export class SearchService {
  constructor(private readonly duckDuckScrape: DuckDuckScrape) {}

  search({ query, locale, offset, safeSearch }: SearchOptionsDto) {
    return this.duckDuckScrape.search({
      query,
      locale,
      offset,
      safeSearchType: safeSearch,
    });
  }

  suggestions({ query }: SuggestionsOptionsDto) {
    return this.duckDuckScrape.autocomplete({ query });
  }
}
