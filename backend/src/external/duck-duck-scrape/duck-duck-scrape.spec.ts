import { Test, TestingModule } from '@nestjs/testing';
import { DuckDuckScrape } from './duck-duck-scrape';

describe('DuckDuckScrape', () => {
  let provider: DuckDuckScrape;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuckDuckScrape],
    }).compile();

    provider = module.get<DuckDuckScrape>(DuckDuckScrape);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
