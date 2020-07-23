import {Component, OnInit} from '@angular/core';
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
  providers: [TaskService]
})
export class TaskPageComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  get taskDTO() {
    return this.taskService.taskDTO;
  }

  ngOnInit(): void {
  }

  addTask() {
    this.taskService.addTask();
  }
}
