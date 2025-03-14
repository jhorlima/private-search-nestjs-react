import { Module } from '@nestjs/common';
import { DuckDuckScrapeModule } from '@/external/duck-duck-scrape/duck-duck-scrape.module';

import { SearchService } from './services/search.service';
import { SearchController } from './http/search.controller';

@Module({
  imports: [DuckDuckScrapeModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
