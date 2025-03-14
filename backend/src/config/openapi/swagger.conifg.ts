import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableOpenAPI = (app: INestApplication): void => {
  const configService = app.get(ConfigService);
  const apiPort = configService.get<number>('API_PORT', 3000);

  const openApiConfig = new DocumentBuilder()
    .setTitle('Private Search API')
    .setDescription(
      `This API powers the Private Search Engine platform, providing endpoints for:
      - Web search functionality with customizable parameters
      - Search history management 
      - Safe search filtering options
      - Locale-based search results
      - Search suggestions and auto-complete features`,
    )
    .setVersion('1.0.0')
    .addServer(`http://localhost:${apiPort}`, 'Local')
    .addTag('search', 'Search operation endpoints')
    .addTag('history', 'Search history management')
    .addTag('suggestions', 'Search suggestions and auto-complete')
    .build();

  const openAPIDocument = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('docs', app, openAPIDocument);
};
