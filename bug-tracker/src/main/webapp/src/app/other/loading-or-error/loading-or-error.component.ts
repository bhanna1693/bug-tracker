import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgIfContext} from "@angular/common";

@Component({
  selector: 'app-loading-or-error',
  template: `
    <ng-template #template>
      <div *ngIf="errorLoading$; else loading" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <ng-template #loading>
        <div class="spinner">
          <mat-spinner></mat-spinner>
        </div>
      </ng-template>
    </ng-template>
  `,
  styles: [`
    .spinner {
      display: flex;
      justify-content: center;
    }
  `]
})
export class LoadingOrErrorComponent implements OnInit {
  /**
   * The template that should get created when we are in a loading or error state.
   * Use it in the else condition of *ngIf.
   */
  @ViewChild('template') template: TemplateRef<NgIfContext<any>> | null = null;
  /**
   * The loading wrapper that should be used to show the loading/error state
   */
  @Input() errorLoading$: boolean | null = null;
  /**
   * A configurable error message for error cases.
   */
  @Input() errorMessage = 'A error occured!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
