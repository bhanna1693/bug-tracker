import {Component, OnInit} from '@angular/core';
import {NavService} from "../nav.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor(public navService: NavService) { }

  ngOnInit(): void {
  }

  logout() {
    // TODO: add logout logic
  }

}
