import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseErrorResponse } from '@core/http/responses/error/base-error.response';

@Exclude()
export abstract class BaseUnprocessableEntityError extends BaseErrorResponse<BaseUnprocessableEntityError> {
  @ApiProperty({ example: `Invalid data in the request.` })
  @Expose()
  message: string;

  @ApiProperty({ example: HttpStatus.UNPROCESSABLE_ENTITY })
  @Expose()
  statusCode: number;

  abstract details: Record<string, unknown>;
}
