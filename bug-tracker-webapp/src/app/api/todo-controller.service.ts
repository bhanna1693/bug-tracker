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
    return this.http.get(environment.API_BASE_URL + '/tasks');
  }

  markTaskAsCompleted(id: string) {
    return this.http.post(environment.API_BASE_URL + '/tasks/toggle-completed/' + id, null);
  }
}
