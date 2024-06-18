"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSeriesIntradayService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let TimeSeriesIntradayService = class TimeSeriesIntradayService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetch_intraday(page) {
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=RIBXT3XYLI69PC0Q'));
        const items = response.data['Time Series (Digital Currency Weekly)'];
        console.log('data', response.data);
        const pgStart = (page - 1) * 10;
        const pgFinish = pgStart + 10;
        const pageIndexes = Object.keys(items).slice(pgStart, pgFinish);
        const responseObj = { timeSeries: {}, pages: null, currentPage: null, totalItems: null };
        for (const day of pageIndexes) {
            responseObj.timeSeries[`${day}`] = items[`${day}`];
        }
        responseObj.currentPage = page;
        responseObj.totalItems = Object.keys(items).length;
        responseObj.pages = Math.floor(responseObj.totalItems / 10);
        return responseObj;
    }
};
exports.TimeSeriesIntradayService = TimeSeriesIntradayService;
exports.TimeSeriesIntradayService = TimeSeriesIntradayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], TimeSeriesIntradayService);
//# sourceMappingURL=service.js.map