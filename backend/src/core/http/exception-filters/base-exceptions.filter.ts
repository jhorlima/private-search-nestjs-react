import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';

import { BaseException } from '@core/exceptions/base.exception';
import { BaseErrorResponse } from '@core/http/responses/error/base-error.response';
import { BaseHttpResponse } from '@core/http/interfaces/base-request-response.interface';

export abstract class BaseExceptionsFilter<T extends BaseException>
  implements ExceptionFilter<T>
{
  abstract catch(exception: T, host: ArgumentsHost);

  protected response(statusCode: number, exception: T, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<BaseHttpResponse>();

    const responseJson = {
      message: exception.message,
      statusCode: statusCode,
      details: exception.details,
    } as BaseErrorResponse<T>;

    response.status(statusCode).json(responseJson);
  }
}
