import { INestApplication } from '@nestjs/common';
import { HttpExceptionFilter } from '@core/http/exception-filters/http-exceptions.filter';
import { DuckDuckScrapeExceptionFilter } from '@/external/duck-duck-scrape/duck-duck-scrape.exception-filter';

export const enableExceptionsFilter = (app: INestApplication): void => {
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new DuckDuckScrapeExceptionFilter());
};
