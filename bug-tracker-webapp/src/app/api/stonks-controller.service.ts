import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SymbolSearch} from "../models/stonks/symbol-search";

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
    return this.http.get<SymbolSearch>(environment.API_BASE_URL + '/stonks/typeahead', {
      params: {keywords}
    });
  }

}
