import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TimeSeriesIntradayService {
  constructor(private readonly httpService: HttpService) {}

  fetch_intraday(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=RIBXT3XYLI69PC0Q',
      )
      .pipe(map((response) => response.data));
  }
}
