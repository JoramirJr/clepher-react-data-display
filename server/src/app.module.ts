import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeSeriesIntradayController } from './time_series_intraday/time_series_intraday.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TimeSeriesIntradayController],
  providers: [AppService],
})
export class AppModule {}
