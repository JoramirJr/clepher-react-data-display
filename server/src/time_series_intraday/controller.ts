import { Controller, Get } from '@nestjs/common';
import { TimeSeriesIntradayService } from './service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('intraday')
export class TimeSeriesIntradayController {
  constructor(
    private readonly timeSeriesIntradayService: TimeSeriesIntradayService,
  ) {}

  @Get()
  fetch_intraday(): Observable<AxiosResponse<any>> {
    return this.timeSeriesIntradayService.fetch_intraday();
  }
}
