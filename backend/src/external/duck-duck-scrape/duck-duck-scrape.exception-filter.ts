import { Catch, HttpStatus, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionsFilter } from '@core/http/exception-filters/base-exceptions.filter';
import { DuckDuckScraperException } from '@/external/duck-duck-scrape/duck-duck-scraper.exception';

@Catch(DuckDuckScraperException)
export class DuckDuckScrapeExceptionFilter extends BaseExceptionsFilter<DuckDuckScraperException> {
  catch(exception: DuckDuckScraperException, host: ArgumentsHost): void {
    const statusMap: Record<string, number> = {
      DuckDuckScraperNotFoundException: HttpStatus.NOT_FOUND,
    };

    const className = exception.constructor.name;
    const status = statusMap[className] || HttpStatus.INTERNAL_SERVER_ERROR;

    this.response(status, exception, host);
  }
}
