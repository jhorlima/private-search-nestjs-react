import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

import { BaseResponse } from '@core/http/responses/base.response';
import { DuckDuckScrapeAutocompleteResult } from '@/external/duck-duck-scrape';
import { BasePaginationResponse } from '@core/http/responses/base-pagination.response';

type SuggestionsResultProperties = Pick<
  DuckDuckScrapeAutocompleteResult,
  'phrase'
>;

@Exclude()
export class SuggestionsResultSuccess
  extends BaseResponse<SuggestionsResultSuccess>
  implements SuggestionsResultProperties
{
  @ApiProperty({
    description: 'The phrase of the suggestions result',
    example: 'Tesla Model 3',
  })
  @Expose()
  phrase: string;
}

@Exclude()
export class SuggestionsResultsSuccess extends BasePaginationResponse<
  SuggestionsResultsSuccess,
  SuggestionsResultSuccess
> {
  @ApiProperty({
    description: 'The results of the search',
    type: [SuggestionsResultSuccess],
  })
  @Type(() => SuggestionsResultSuccess)
  @Expose()
  results: SuggestionsResultSuccess[];
}
