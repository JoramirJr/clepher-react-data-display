import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class TimeSeriesIntradayService {
    private readonly httpService;
    constructor(httpService: HttpService);
    fetch_intraday(): Observable<AxiosResponse<any>>;
}
