import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeComponent} from './theme/theme.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [ThemeComponent]
})
export class ThemeModule {
}
