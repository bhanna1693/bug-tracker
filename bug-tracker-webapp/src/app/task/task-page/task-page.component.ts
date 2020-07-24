import {Component, OnInit} from '@angular/core';
import {TaskService} from "../services/task.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Task} from "../../models/task";

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

  drop(e: CdkDragDrop<Task[]>) {
    this.taskService.moveItemInArray(e);
  }
}
