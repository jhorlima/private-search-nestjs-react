import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseUnprocessableEntityError } from '@core/http/responses/error/base-unprocessable-entity.response';

@Exclude()
export class SearchResultsUnprocessableEntity extends BaseUnprocessableEntityError {
  @ApiProperty({
    example: {
      query: {
        isString: 'query must be a string',
        isLength: 'query must be longer than or equal to 3 characters',
      },
      locale: {
        isString: 'locale must be a string',
        isLocale: 'locale must be locale',
      },
      offset: {
        min: 'offset must not be less than 0',
      },
      safeSearch: {
        isString: 'safeSearch must be a string',
        isEnum: `safeSearch must be one of the following values: STRICT, MODERATE, OFF`,
      },
    },
  })
  @Expose()
  details: Record<string, unknown>;
}
