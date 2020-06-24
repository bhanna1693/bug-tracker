import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  greeting: any = {};

  constructor(private app: AppService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }
}
