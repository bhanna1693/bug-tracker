import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskRoutingModule} from './task-routing.module';
import {TaskComponent} from './task.component';
import {TaskPageComponent} from './task-page/task-page.component';
import {TaskListItemComponent} from './task-page/task-list-item/task-list-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {TaskDialogComponent} from './dialogs/task-dialog/task-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import { TaskListItemMenuComponent } from './task-page/task-list-item/task-list-item-menu/task-list-item-menu.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskPageComponent,
    TaskListItemComponent,
    TaskDialogComponent,
    TaskListItemMenuComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class TaskModule {
}
