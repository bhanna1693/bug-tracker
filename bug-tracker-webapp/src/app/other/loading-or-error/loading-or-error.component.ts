import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgIfContext} from "@angular/common";
import {Subject} from "rxjs";

@Component({
  selector: 'app-loading-or-error',
  template: `
    <ng-template #template>
      <div *ngIf="errorLoading$ | async; else loading" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <ng-template #loading>
        <mat-spinner></mat-spinner>
      </ng-template>
    </ng-template>
  `,
  styles: []
})
export class LoadingOrErrorComponent implements OnInit {
  /**
   * The template that should get created when we are in a loading or error state.
   * Use it in the else condition of *ngIf.
   */
  @ViewChild('template') template: TemplateRef<NgIfContext> | null = null;
  /**
   * The loading wrapper that should be used to show the loading/error state
   */
  @Input() errorLoading$: Subject<boolean> | null = null;
  /**
   * A configurable error message for error cases.
   */
  @Input() errorMessage = 'A error occured!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
