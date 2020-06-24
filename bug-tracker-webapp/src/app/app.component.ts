import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.authenticate();
  }

  authenticate() {
    this.appService.authenticate(undefined, undefined);
  }
}
