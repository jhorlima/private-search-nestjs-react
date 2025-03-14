import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SearchModule } from '@search/search.module';

import { AppService } from './services/app.service';
import { AppController } from './http/app.controller';

@Module({
  imports: [ConfigModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
