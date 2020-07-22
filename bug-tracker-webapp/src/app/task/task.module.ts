import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskListItemComponent } from './task-page/task-list-item/task-list-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [TaskComponent, TaskPageComponent, TaskListItemComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class TaskModule { }
