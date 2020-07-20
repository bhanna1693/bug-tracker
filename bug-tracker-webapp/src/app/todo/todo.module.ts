import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoPageComponent} from "./todo-page/todo-page.component";
import {MatTabsModule} from "@angular/material/tabs";
import { TodoListComponent } from './todo-page/todo-list/todo-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { TodoByIdPageComponent } from './todo-by-id-page/todo-by-id-page.component';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoListComponent,
    TodoByIdPageComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ]
})
export class TodoModule { }
