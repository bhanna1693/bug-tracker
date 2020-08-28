import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Theme, ThemeService} from "../theme.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeComponent implements OnInit {
  Theme = Theme;
  environment = environment;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  setTheme(theme: Theme) {
    this.themeService.themeBundleName.next(theme);
  }


}
