import { BaseResponse } from '@core/http/responses/base.response';

export abstract class BaseErrorResponse<
  T extends BaseResponse<T>,
> extends BaseResponse<T> {
  abstract message: string;
  abstract statusCode: number;
  abstract details?: Record<string, any>;
}
