import {Inject, Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {takeUntil} from "rxjs/operators";

export enum Theme {
  DEFAULT_THEME = 'default-theme',
  DARK_THEME = 'dark-theme',
  SECONDARY_THEME = 'secondary-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  public themeBundleName = new BehaviorSubject<Theme>(null);
  private destroy$ = new Subject();
  private themeId: string = 'material-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const defaultTheme = Theme.DEFAULT_THEME;
    this.themeBundleName.next(defaultTheme);
    this.doesDefaultThemeExist(defaultTheme);
    this.subscribeToThemeChanges();
  }

  get head(): HTMLHeadElement {
    return this.document.getElementsByTagName('head')[0];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  subscribeToThemeChanges() {
    this.themeBundleName
      .pipe(takeUntil(this.destroy$))
      .subscribe((bundleName) => {
        this.loadThemeByBundleName(bundleName);
      });
  }


  /**
   * logic for creating or replacing theme stylesheet
   * searches for element by id
   * @param bundleName
   */
  loadThemeByBundleName(bundleName: Theme) {
    // TODO: optimize for caching if switching between colors during runtime is allowed
    const stylesheet = this.document.getElementById(this.themeId) as HTMLLinkElement | null;
    if (stylesheet) {
      // replace existing stylesheet
      if (!stylesheet.href.includes(bundleName)) {
        stylesheet.href = bundleName + '.css';
      }
    } else {
      // create new stylesheet
      const newStylesheet = this.document.createElement('link');
      newStylesheet.id = this.themeId;
      newStylesheet.rel = 'stylesheet';
      newStylesheet.href = `${bundleName}.css`;

      this.head.appendChild(newStylesheet);
    }
  }


  /**
   * set link id onInit because angular.json {inject: true} does not allow you to set an ID to link element during build
   */
  doesDefaultThemeExist(theme: Theme): boolean {
    const defaultThemeHref = theme + '.css';
    const defaultTheme = this.head.querySelectorAll(`link[href="${defaultThemeHref}"]`);
    const doesDefaultThemeExist = !!(defaultTheme && defaultTheme[0]);
    if (doesDefaultThemeExist) {
      // set id for runtime theme swapping
      defaultTheme[0].id = this.themeId;
    }
    return doesDefaultThemeExist;
  }
}

