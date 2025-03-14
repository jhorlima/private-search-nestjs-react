import { Module } from '@nestjs/common';
import { DuckDuckScrape } from './duck-duck-scrape';

@Module({
  providers: [DuckDuckScrape],
  exports: [DuckDuckScrape],
})
export class DuckDuckScrapeModule {}
