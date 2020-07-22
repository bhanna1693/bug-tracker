import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskComponent} from "./task.component";
import {TaskPageComponent} from "./task-page/task-page.component";


const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: ':listId',
        component: TaskPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
