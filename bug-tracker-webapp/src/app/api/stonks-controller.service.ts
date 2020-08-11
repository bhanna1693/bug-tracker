import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CompanyOverview} from "../models/stonks/company-overview";
import {GlobalQuote} from "../models/stonks/global-quote";
import {SymbolSearchItemDTO} from "../models/stonks/symbol-search";

@Injectable({
  providedIn: 'root'
})
export class StonksControllerService {

  constructor(private http: HttpClient) {
  }

  getTimeSeriesData(symbol: string) {
    return this.http.get(environment.API_BASE_URL + '/stonks/time-series-daily/' + symbol);
  }

  getStockTypeahead(keywords: string) {
    return this.http.get<SymbolSearchItemDTO[]>(environment.API_BASE_URL + '/stonks/typeahead', {
      params: {keywords}
    });
  }

  getCompanyOverview(symbol: string) {
    return this.http.get<CompanyOverview>(environment.API_BASE_URL + '/stonks/company-overview', {
      params: {symbol}
    });
  }

  getGlobalQuote(symbol: string) {
    return this.http.get<GlobalQuote>(environment.API_BASE_URL + '/stonks/global-quote', {
      params: {symbol}
    });
  }

}
