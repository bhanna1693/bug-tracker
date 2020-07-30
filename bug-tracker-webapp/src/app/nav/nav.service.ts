import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject} from "rxjs";
import {debounceTime, map, startWith, takeUntil} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy {
  private destroy$ = new Subject<boolean>();
  isLargeScreen$ = new BehaviorSubject<boolean>(false);
  isSideNavOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.subscribeToWindowResize();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  toggleSideNav() {
    this.isSideNavOpen$.next(!this.isSideNavOpen$.getValue());
  }

  private subscribeToWindowResize() {
    fromEvent(window, 'resize')
      .pipe(
        startWith('init'),
        takeUntil(this.destroy$),
        debounceTime(500),
        map(() => this.isScreenLarge())
      )
      .subscribe((boo) => {
        this.isLargeScreen$.next(boo);
        this.isSideNavOpen$.next(boo);
      });
  }

  private isScreenLarge(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width > 786;
  }

}
