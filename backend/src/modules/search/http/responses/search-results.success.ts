import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

import { BaseResponse } from '@core/http/responses/base.response';
import { DuckDuckScrapeSearchResult } from '@/external/duck-duck-scrape';
import { BasePaginationResponse } from '@core/http/responses/base-pagination.response';

type SearchResultsProperties = Pick<
  DuckDuckScrapeSearchResult,
  'title' | 'description' | 'icon' | 'url'
>;

@Exclude()
export class SearchResultSuccess
  extends BaseResponse<SearchResultSuccess>
  implements SearchResultsProperties
{
  @ApiProperty({
    description: 'The title of the search result',
    example: 'Model 3 - Tesla',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'The description of the search result',
    example: `<b>Model</b> <b>3</b> is a sleek and stylish electric car with up to 363 miles of range and dual motor all-wheel drive. Enjoy premium materials, sound, technology and remote access with the <b>Tesla</b> app.`,
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: 'The icon of the search result',
    example: 'https://external-content.duckduckgo.com/ip3/www.tesla.com.ico',
  })
  @Expose()
  icon: string;

  @ApiProperty({
    description: 'The url of the search result',
    example: 'https://www.tesla.com/model3',
  })
  @Expose()
  url: string;
}

@Exclude()
export class SearchResultsSuccess extends BasePaginationResponse<
  SearchResultsSuccess,
  SearchResultSuccess
> {
  @ApiProperty({
    description: 'The results of the search',
    type: [SearchResultSuccess],
  })
  @Type(() => SearchResultSuccess)
  @Expose()
  results: SearchResultSuccess[];
}
