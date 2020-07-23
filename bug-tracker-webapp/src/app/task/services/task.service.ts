import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskControllerService} from "../../api/task-controller.service";
import {finalize} from "rxjs/operators";
import {Task} from "../../models/task";

@Injectable()
export class TaskService {
  loading = false;
  taskDTO: Task[];

  constructor(private activatedRoute: ActivatedRoute,
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

  toggleCompleted(task: Task) {
    this.taskControllerService.markTaskAsCompleted(task.id.toString())
      .subscribe(() => {
        task.completed = !task.completed;
      });
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
