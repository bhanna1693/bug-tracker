import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskDialogData} from "./task-dialog-data";
import {TaskControllerService} from "../../../api/task-controller.service";
import {Crud} from "../../../models/crud.enum";
import {slideInOutAnimation} from "../../../animations/slide-in-out-animation";
import {TaskFormService} from "../../services/task-form.service";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
  providers: [TaskFormService],
  animations: [slideInOutAnimation]
})
export class TaskDialogComponent implements OnInit {
  title: string;
  crud = Crud;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
              private dialogRef: MatDialogRef<TaskDialogComponent>,
              private taskControllerService: TaskControllerService,
              private taskFormService: TaskFormService) {
  }

  get taskForm() {
    return this.taskFormService.taskForm
  }

  ngOnInit(): void {
    this.title = this.setTitle(this.data.crudType);
    if (this.data.task) {
      this.taskForm.patchValue(this.data.task);
    }
  }

  addTask() {
    this.taskControllerService.addTask(this.taskForm.value)
      .subscribe(resp => {
        this.dialogRef.close(resp);
      });
  }

  editTask() {
    this.taskControllerService.editTask(this.taskForm.value)
      .subscribe(resp => {
        this.dialogRef.close(resp);
      });
  }

  setTitle(crudType: Crud) {
    switch (crudType) {
      case Crud.CREATE:
        return 'Add Task';
      case Crud.UPDATE:
        return 'Edit Task';
    }
  }


}
