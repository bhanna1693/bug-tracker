import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TaskFormService} from "../../services/task-form.service";
import {Task} from "../../../models/task";

@Component({
  selector: 'app-add-task-quick',
  templateUrl: './add-task-quick.component.html',
  styleUrls: ['./add-task-quick.component.css'],
  providers: [TaskFormService]
})
export class AddTaskQuickComponent implements OnInit {
  @Output() addTask = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild('titleInput', {static: true}) titleInput: ElementRef;

  constructor(private taskFormService: TaskFormService) {
  }

  get taskForm() {
    return this.taskFormService.taskForm;
  }

  ngOnInit(): void {
    this.titleInput.nativeElement.focus();
  }

  emitAddTask() {
    this.addTask.emit(this.taskForm.value);
  }


  emitCancel() {
    this.cancel.emit();
  }

}
