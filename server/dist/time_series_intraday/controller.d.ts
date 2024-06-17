import { TimeSeriesIntradayService } from './service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class TimeSeriesIntradayController {
    private readonly timeSeriesIntradayService;
    constructor(timeSeriesIntradayService: TimeSeriesIntradayService);
    fetch_intraday(): Observable<AxiosResponse<any>>;
}
