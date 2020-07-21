import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoListItems = [
    {
      title: 'Clean the dishes',
      id: '1',
      notes: 'I HATE DISHES!',
      completed: false
    },
    {
      title: 'Go to the gym',
      id: '2',
      notes: 'get swollleeee',
      completed: true
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
