import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
    return this.http.get(environment.API_BASE_URL + '/stonks/typeahead', {
      params: {keywords}
    });
  }

}
