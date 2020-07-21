import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-landing-page',
  templateUrl: './todo-landing-page.component.html',
  styleUrls: ['./todo-landing-page.component.css']
})
export class TodoLandingPageComponent implements OnInit {
  todoLists: any[] = [
    {
      title: 'Title of todo list item',
      description: 'quick description of list item',
      id: '123'
    },
    {
      title: 'Another Title of todo list item',
      description: 'another quick description of list item',
      id: '456'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
