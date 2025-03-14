import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseUnprocessableEntityError } from '@core/http/responses/error/base-unprocessable-entity.response';

@Exclude()
export class SuggestionsResultsUnprocessableEntity extends BaseUnprocessableEntityError {
  @ApiProperty({
    example: {
      query: {
        isString: 'query must be a string',
        isLength: 'query must be longer than or equal to 3 characters',
      },
    },
  })
  @Expose()
  details: Record<string, unknown>;
}
