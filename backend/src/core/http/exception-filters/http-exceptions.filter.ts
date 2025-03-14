import {
  Catch,
  HttpException,
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common';

import { BaseErrorResponse } from '@core/http/responses/error/base-error.response';
import { BaseHttpResponse } from '@core/http/interfaces/base-request-response.interface';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<BaseHttpResponse>();

    const statusCode = exception.getStatus();
    const body = exception.getResponse();

    const responseJson = {
      ...(typeof body === 'object' && { ...body }),
      message: typeof body === 'string' ? body : exception.message,
      statusCode: statusCode,
    } as BaseErrorResponse<HttpException>;

    response.status(statusCode).json(responseJson);
  }
}
