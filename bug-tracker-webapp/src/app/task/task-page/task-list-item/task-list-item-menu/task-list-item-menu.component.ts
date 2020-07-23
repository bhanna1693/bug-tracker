import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../../models/task";

@Component({
  selector: 'app-task-list-item-menu',
  templateUrl: './task-list-item-menu.component.html',
  styleUrls: ['./task-list-item-menu.component.css']
})
export class TaskListItemMenuComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  editTask() {
    this.taskService.editTask(this.task);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }

}
