import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoControllerService {

  constructor(private http: HttpClient) {
  }

  getListById(id: string) {
    return this.http.get(environment.API_BASE_URL + '/todo/list', {
      params: {id}
    });
  }
}
