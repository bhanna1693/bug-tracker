import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskDialogData} from "./task-dialog-data";
import {TaskControllerService} from "../../../api/task-controller.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  taskForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: TaskDialogData,
              private dialogRef: MatDialogRef<TaskDialogComponent>,
              private taskControllerService: TaskControllerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]]
    })
  }

  addTask() {
    this.taskControllerService.addTask(this.taskForm.value)
      .subscribe(resp => {
        this.dialogRef.close();
      });
  }



}
