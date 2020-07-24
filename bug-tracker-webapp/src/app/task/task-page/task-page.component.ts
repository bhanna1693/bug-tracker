import {Component, OnInit} from '@angular/core';
import {TaskService} from "../services/task.service";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {Task} from "../../models/task";
import {TaskControllerService} from "../../api/task-controller.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
  providers: [TaskService]
})
export class TaskPageComponent implements OnInit {
  showTaskForm = false;

  constructor(private taskService: TaskService,
              private taskControllerService: TaskControllerService) {
  }

  get taskDTO() {
    return this.taskService.taskDTO;
  }

  ngOnInit(): void {
  }

  openTaskDialog() {
    this.taskService.openTaskDialog();
  }

  drop(e: CdkDragDrop<Task[]>) {
    this.taskService.moveItemInArray(e);
  }

  onAddTask(e: Task) {
    this.taskControllerService.addTask(e)
      .subscribe(resp => {
        this.showTaskForm = false;
        this.taskService.fetchTasks();
      });
  }
}
