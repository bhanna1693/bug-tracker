import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  notes = this.http.get(environment.API_BASE_URL + '/employees/1');

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}
