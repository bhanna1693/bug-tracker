import {Injectable, OnDestroy} from '@angular/core';
import {fromEvent, Subject} from "rxjs";
import {debounceTime, startWith, takeUntil} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy {
  private destroy$ = new Subject<boolean>();
  isLargeScreen: boolean;

  constructor() {
    this.subscribeToWindowResize();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private subscribeToWindowResize() {
    fromEvent(window, 'resize')
      .pipe(
        startWith('init'),
        takeUntil(this.destroy$),
        debounceTime(500),
      )
      .subscribe(() => {
        this.isLargeScreen = this.isScreenLarge();
      });
  }

  private isScreenLarge(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width > 599;
  }

}
