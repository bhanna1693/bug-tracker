import {Component, Input, OnInit} from '@angular/core';
import {TaskControllerService} from "../../../api/task-controller.service";

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() listItem;

  constructor(private taskControllerService: TaskControllerService) { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    // toggle completed status
    this.listItem.completed = !this.listItem.completed;
    this.taskControllerService.markTaskAsCompleted(this.listItem.id)
      .subscribe(null);
  }

}
