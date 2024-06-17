import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class TimeSeriesIntradayService {
  constructor(private readonly httpService: HttpService) { }

  async fetch_intraday(page?: number): Promise<any> {
    const response = await lastValueFrom(this.httpService.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=RIBXT3XYLI69PC0Q'));
    const items = response.data['Time Series (Digital Currency Weekly)'];

    const pgStart = (page - 1) * 10;
    const pgFinish = pgStart + 10;
    const pageIndexes = Object.keys(items).slice(pgStart, pgFinish);
    console.log('page indexes', items);
    const responseObj = {};
    for (const day of pageIndexes) {
      responseObj[`${day}`] = items[`${day}`]
    }
    return responseObj;
  }
}