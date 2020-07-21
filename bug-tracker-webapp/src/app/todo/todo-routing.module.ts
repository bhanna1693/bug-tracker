import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoLandingPageComponent} from "./todo-landing-page/todo-landing-page.component";
import {TodoListPageComponent} from "./todo-list-page/todo-list-page.component";
import {TodoListComponent} from "./todo-list-page/todo-list/todo-list.component";
import {TodoDetailComponent} from "./todo-list-page/todo-detail/todo-detail.component";


const routes: Routes = [
  {
    path: '',
    component: TodoLandingPageComponent
  },
  {
    path: ':listId',
    component: TodoListPageComponent,
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: ':todoId',
        component: TodoDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
