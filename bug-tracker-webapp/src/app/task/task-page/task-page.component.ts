import {Component, OnInit} from '@angular/core';
import {TaskService} from "../services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent} from "../dialogs/task-dialog/task-dialog.component";
import {Crud} from "../../models/crud.enum";
import {TaskDialogData} from "../dialogs/task-dialog/task-dialog-data";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
  providers: [TaskService]
})
export class TaskPageComponent implements OnInit {

  constructor(private taskService: TaskService,
              private dialog: MatDialog) { }

  get taskDTO() {
    return this.taskService.taskDTO;
  }

  ngOnInit(): void {
  }

  addTask() {
    const data: TaskDialogData = {
      crudType: Crud.CREATE
    }
    this.dialog.open(TaskDialogComponent, {
      data
    }).afterClosed().subscribe(task => {
      this.taskService.fetchTasks();
    });
  }
}
