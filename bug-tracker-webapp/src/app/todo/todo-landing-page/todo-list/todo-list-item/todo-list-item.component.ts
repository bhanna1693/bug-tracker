import {Component, Input, OnInit} from '@angular/core';
import {TodoControllerService} from "../../../../api/todo-controller.service";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() listItem;

  constructor(private todoControllerService: TodoControllerService) { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    // toggle completed status
    this.listItem.completed = !this.listItem.completed;
    this.todoControllerService.markTaskAsCompleted(this.listItem.id)
      .subscribe(null);
  }

}
