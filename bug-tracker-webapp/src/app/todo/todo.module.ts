import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {TodoLandingPageComponent} from './todo-landing-page/todo-landing-page.component';
import {TodoListsComponent} from './todo-landing-page/todo-lists/todo-lists.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodoListComponent } from './todo-list-page/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-list-page/todo-detail/todo-detail.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    TodoLandingPageComponent,
    TodoListsComponent,
    TodoListPageComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class TodoModule {
}
