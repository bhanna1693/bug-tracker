import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  @Input() todoLists: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
