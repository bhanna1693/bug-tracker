import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoPageComponent} from "./todo-page/todo-page.component";
import {TodoByIdPageComponent} from "./todo-by-id-page/todo-by-id-page.component";


const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  },
  {
    path: ':id',
    component: TodoByIdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
