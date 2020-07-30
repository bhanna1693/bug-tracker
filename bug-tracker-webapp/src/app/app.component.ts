import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavService} from "./nav/nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private navService: NavService) {
  }

  get isLargeScreen$() {
    return this.navService.isLargeScreen$;
  }

  get isSideNavOpen$() {
    return this.navService.isSideNavOpen$;
  }

  ngOnInit() {
  }

}
