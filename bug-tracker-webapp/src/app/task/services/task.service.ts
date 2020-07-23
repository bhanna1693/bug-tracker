import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskControllerService} from "../../api/task-controller.service";
import {finalize} from "rxjs/operators";
import {Task} from "../../models/task";
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent} from "../dialogs/task-dialog/task-dialog.component";
import {TaskDialogData} from "../dialogs/task-dialog/task-dialog-data";
import {Crud} from "../../models/crud.enum";

@Injectable()
export class TaskService {
  loading = false;
  taskDTO: Task[];

  constructor(private activatedRoute: ActivatedRoute,
              private dialog: MatDialog,
              private taskControllerService: TaskControllerService) {
    this.fetchTasks();
  }

  get taskId() {
    return this.activatedRoute.snapshot.paramMap.get('taskId');
  }

  fetchTasks() {
    this.loading = true;
    this.taskControllerService.getListById(this.taskId)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(resp => this.taskDTO = resp);
  }

  addTask() {
    const data: TaskDialogData = {
      crudType: Crud.CREATE
    }
    this.dialog.open(TaskDialogComponent, {
      data
    }).afterClosed().subscribe(task => {
      this.fetchTasks();
    });
  }

  toggleCompleted(task: Task) {
    this.taskControllerService.markTaskAsCompleted(task.id.toString())
      .subscribe(() => {
        task.completed = !task.completed;
      });
  }

  editTask(task: Task) {
    const data: TaskDialogData = {
      crudType: Crud.UPDATE,
      task
    }
    this.dialog.open(TaskDialogComponent, {
      data
    }).afterClosed().subscribe(task => {
      this.fetchTasks();
    })
  }

  deleteTask(task: Task) {
    this.taskControllerService.deleteTask(task.id.toString())
      .subscribe(() => {
        const index = this.taskDTO.findIndex(t => t.id === task.id);
        if (index > -1) {
          this.taskDTO.splice(index, 1);
        }
      });
  }
}
