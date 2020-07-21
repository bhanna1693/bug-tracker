import {Component, OnInit} from '@angular/core';
import {TodoListService} from "../../services/todo-list/todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) {
  }

  get listDTO() {
    return this.todoListService.listDTO;
  }

  ngOnInit(): void {
  }

}
