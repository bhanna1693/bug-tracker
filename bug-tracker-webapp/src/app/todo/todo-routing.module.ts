import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoLandingPageComponent} from "./todo-landing-page/todo-landing-page.component";


const routes: Routes = [
  {
    path: '',
    component: TodoLandingPageComponent
  },
  {
    path: ':list',
    component: null
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
