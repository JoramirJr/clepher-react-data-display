import { HttpService } from '@nestjs/axios';
export declare class TimeSeriesIntradayService {
    private readonly httpService;
    constructor(httpService: HttpService);
    fetch_intraday(page?: number): Promise<any>;
}
