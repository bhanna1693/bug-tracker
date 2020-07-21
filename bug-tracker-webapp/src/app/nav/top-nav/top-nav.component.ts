import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {NavService} from "../nav.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private appService: AppService,
              public navService: NavService) { }

  ngOnInit(): void {
  }

  logout() {
    this.appService.logout();
  }

}
