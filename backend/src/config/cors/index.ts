import { INestApplication } from '@nestjs/common';

export const enableCors = (app: INestApplication): void => {
  app.enableCors({
    origin: '*',
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
};
