import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() listItem;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    // toggle completed status
    this.listItem.completed = !this.listItem.completed;
  }

}
