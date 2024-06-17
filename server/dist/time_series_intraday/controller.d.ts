import { TimeSeriesIntradayService } from './service';
export declare class TimeSeriesIntradayController {
    private readonly timeSeriesIntradayService;
    constructor(timeSeriesIntradayService: TimeSeriesIntradayService);
    fetch_intraday(page: number): Promise<any>;
}
