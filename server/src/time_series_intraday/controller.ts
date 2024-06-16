import { Controller, Get } from '@nestjs/common';
import { TimeSeriesIntradayService } from './service';
import { AxiosResponse } from 'axios';


@Controller('time-series-intraday')
export class TimeSeriesIntradayController {
  constructor(private readonly timeSeriesIntradayService: TimeSeriesIntradayService) { }

  @Get()
  fetch_intraday(): Promise<AxiosResponse<any>> {
    return this.timeSeriesIntradayService.findAll();
  }

}
