import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeComponent} from './theme/theme.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [ThemeComponent]
})
export class ThemeModule {
}
