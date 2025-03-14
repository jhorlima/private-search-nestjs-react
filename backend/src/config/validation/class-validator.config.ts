import { useContainer } from 'class-validator';
import {
  HttpStatus,
  HttpException,
  ValidationPipe,
  ValidationError,
  INestApplication,
} from '@nestjs/common';

import { AppModule } from '@core/app.module';

const ValidationErrorFactory = (errors: ValidationError[]) => {
  throw new HttpException(
    {
      message: 'Invalid data in the request.',
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      details: errors.reduce(
        (details, error) => ({
          ...details,
          [error.property]: error.constraints,
        }),
        {} as Record<string, unknown>,
      ),
    },
    HttpStatus.UNPROCESSABLE_ENTITY,
  );
};

export const enableValidation = (app: INestApplication): void => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: ValidationErrorFactory,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
};
