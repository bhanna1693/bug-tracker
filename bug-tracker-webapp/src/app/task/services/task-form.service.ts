import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class TaskFormService {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]],
      notes: [null],
      completed: [false],
      orderNo: [null],
      id: [null]
    })
  }
}
