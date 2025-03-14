import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  Min,
  IsEnum,
  Length,
  IsLocale,
  IsString,
  IsNumber,
} from 'class-validator';

import { DuckDuckScrapeSafeSearch } from '@/external/duck-duck-scrape/duck-duck-scrape.interface';

export class SearchOptionsDto {
  @ApiProperty({
    description: 'The query to search for',
    example: 'Model 3 - Tesla',
    minLength: 3,
    maxLength: 255,
  })
  @IsString()
  @Length(3, 255)
  query: string;

  @ApiProperty({
    description: 'The language of the search results',
    example: 'en-US',
    minLength: 2,
    maxLength: 5,
    required: false,
  })
  @IsString()
  @IsLocale()
  locale: string;

  @ApiProperty({
    description: 'The offset of the search results',
    example: 0,
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  offset: number = 0;

  @ApiProperty({
    description: 'The safe search type of the search results',
    enum: DuckDuckScrapeSafeSearch,
    default: DuckDuckScrapeSafeSearch.MODERATE,
    example: DuckDuckScrapeSafeSearch.MODERATE,
    required: false,
  })
  @IsString()
  @IsEnum(DuckDuckScrapeSafeSearch)
  safeSearch: DuckDuckScrapeSafeSearch = DuckDuckScrapeSafeSearch.MODERATE;
}
