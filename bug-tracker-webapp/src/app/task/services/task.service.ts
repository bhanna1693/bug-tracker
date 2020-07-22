import { Injectable } from '@angular/core';
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
}
