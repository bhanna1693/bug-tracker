import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavComponent} from './top-nav/top-nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class NavModule {
}
