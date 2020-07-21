import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoLandingPageComponent} from "./todo-landing-page/todo-landing-page.component";
import {TodoListComponent} from "./todo-landing-page/todo-list/todo-list.component";


const routes: Routes = [
  {
    path: '',
    component: TodoLandingPageComponent,
    children: [
      {
        path: ':listId',
        component: TodoListComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
