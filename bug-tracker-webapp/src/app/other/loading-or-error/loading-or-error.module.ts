import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOrErrorComponent } from './loading-or-error.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [LoadingOrErrorComponent],
  exports: [
    LoadingOrErrorComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class LoadingOrErrorModule { }
