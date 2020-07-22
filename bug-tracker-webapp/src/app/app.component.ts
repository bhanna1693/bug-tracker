import {Component, OnInit} from '@angular/core';
import {NavService} from "./nav/nav.service";
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private navService: NavService,
              private appService: AppService) {
  }

  get isLargeScreen() {
    return this.navService.isLargeScreen;
  }

  ngOnInit() {
    this.appService.authenticate()
  }

}
