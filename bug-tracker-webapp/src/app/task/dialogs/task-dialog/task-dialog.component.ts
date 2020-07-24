import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskDialogData} from "./task-dialog-data";
import {TaskControllerService} from "../../../api/task-controller.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Crud} from "../../../models/crud.enum";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  taskForm: FormGroup;
  title: string;
  crud = Crud;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
              private dialogRef: MatDialogRef<TaskDialogComponent>,
              private taskControllerService: TaskControllerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.title = this.setTitle(this.data.crudType);
    this.taskForm = this.buildForm();
    if (this.data.task) {
      this.taskForm.patchValue(this.data.task);
    }
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]],
      notes: [null],
      id: [null]
    })
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
