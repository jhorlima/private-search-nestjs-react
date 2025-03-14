import { Get, Query, Controller } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { SearchService } from '@search/services/search.service';

import { SearchOptionsDto } from '@search/dto/search-options.dto';
import { SearchResultsSuccess } from '@search/http/responses/search-results.success';
import { SearchResultsUnprocessableEntity } from '@search/http/responses/search-results-unprocessable-entity.error';

import { SuggestionsOptionsDto } from '@search/dto/suggestions-options.dto';
import { SuggestionsResultsSuccess } from '@search/http/responses/suggestions-results.success';
import { SuggestionsResultsUnprocessableEntity } from '@search/http/responses/suggestions-results-unprocessable-entity.error';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @ApiOperation({
    summary: 'Search for a term',
    description: 'Endpoint to search for a term.',
  })
  @ApiOkResponse({
    description: 'Search results',
    type: SearchResultsSuccess,
  })
  @ApiUnprocessableEntityResponse({
    description: `Invalid data in the request.`,
    type: SearchResultsUnprocessableEntity,
  })
  @Get()
  async search(@Query() query: SearchOptionsDto) {
    const results = await this.searchService.search(query);
    const resultSuccess = new SearchResultsSuccess({
      results,
      nextOffset: results.length,
    });
    return resultSuccess;
  }

  @ApiOperation({
    summary: 'Suggestions for a term',
    description: 'Endpoint to suggest terms.',
  })
  @ApiOkResponse({
    description: 'Suggestions results',
    type: SuggestionsResultsSuccess,
  })
  @ApiUnprocessableEntityResponse({
    description: `Invalid data in the request.`,
    type: SuggestionsResultsUnprocessableEntity,
  })
  @Get('suggestions')
  async suggestions(@Query() query: SuggestionsOptionsDto) {
    const results = await this.searchService.suggestions(query);
    const resultSuccess = new SuggestionsResultsSuccess({
      results,
    });
    return resultSuccess;
  }
}
