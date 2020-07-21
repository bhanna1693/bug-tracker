import {Injectable} from '@angular/core';
import {TodoControllerService} from "../../../api/todo-controller.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {finalize} from "rxjs/operators";

@Injectable()
export class TodoListService {
  loading = false;
  listDTO: any;

  constructor(private activatedRoute: ActivatedRoute,
              private todoControllerService: TodoControllerService) {
    this.onInit();
  }

  get listId() {
    return this.activatedRoute.snapshot.paramMap.get('listId');
  }

  onInit() {
    this.loading = true;
    this.todoControllerService.getListById(this.listId)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(resp => this.listDTO = resp);
  }
}
