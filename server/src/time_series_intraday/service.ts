import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class TimeSeriesIntradayService {
  constructor(private readonly httpService: HttpService) {}

  async fetch_intraday(): Promise<AxiosResponse<any>> {
    const response = this.httpService.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=RIBXT3XYLI69PC0Q');
    return lastValueFrom(response);
  }
}
