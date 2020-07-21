import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoLandingPageComponent} from './todo-landing-page/todo-landing-page.component';


@NgModule({
  declarations: [
    TodoLandingPageComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
