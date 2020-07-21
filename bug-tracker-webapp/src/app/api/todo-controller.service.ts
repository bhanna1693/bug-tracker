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
    return this.http.get(environment.MOCK_DATA + '/todo/list/' + id + '.json');
  }
}
