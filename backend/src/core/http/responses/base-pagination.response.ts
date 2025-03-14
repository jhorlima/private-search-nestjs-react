import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

import { BaseResponse } from '@core/http/responses/base.response';

@Exclude()
export abstract class BasePaginationResponse<
  T extends BasePaginationResponse<T, Y>,
  Y,
> extends BaseResponse<T> {
  @ApiProperty({
    description: 'Offset to be used in the next request',
    example: 1234,
    examples: [1234, 5678, null],
    nullable: true,
  })
  @Expose()
  nextOffset: number | null;

  abstract results: Y[];
}
