import { Reflector } from '@nestjs/core';
import { INestApplication, ClassSerializerInterceptor } from '@nestjs/common';

export const enableSerializer = (app: INestApplication): void => {
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
};
