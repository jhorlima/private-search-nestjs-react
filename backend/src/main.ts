import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { enableCors } from '@/config/cors';
import { enableOpenAPI } from '@/config/openapi/swagger.conifg';
import { enableValidation } from '@/config/validation/class-validator.config';
import { enableSerializer } from '@/config/serializer/class-transform.config';
import { enableExceptionsFilter } from '@/config/exception-filters';

import { AppModule } from '@core/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const apiPort = configService.get<number>('API_PORT', 3000);

  enableCors(app);
  enableOpenAPI(app);
  enableValidation(app);
  enableSerializer(app);
  enableExceptionsFilter(app);

  await app.listen(apiPort);
}
bootstrap();
