import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoLandingPageComponent} from './todo-landing-page/todo-landing-page.component';
import { TodoListComponent } from './todo-landing-page/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-landing-page/todo-list/todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [
    TodoLandingPageComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
