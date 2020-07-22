import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskControllerService} from "../../api/task-controller.service";
import {finalize} from "rxjs/operators";

@Injectable()
export class TaskService {
  loading = false;
  listDTO: any;

  constructor(private activatedRoute: ActivatedRoute,
              private taskControllerService: TaskControllerService) {
    this.onInit();
  }

  get listId() {
    return this.activatedRoute.snapshot.paramMap.get('listId');
  }

  onInit() {
    this.loading = true;
    this.taskControllerService.getListById(this.listId)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(resp => this.listDTO = resp);
  }
}
