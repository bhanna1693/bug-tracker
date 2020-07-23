import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../../models/task";

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  toggleCompleted() {
    // toggle completed status
    this.taskService.toggleCompleted(this.task)
  }

}
