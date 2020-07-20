import { Component, OnInit } from '@angular/core';
import {ProjectTypeService} from "../services/project-type.service";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todoLists: any[] = [
    {
      title: 'Title of todo list item',
      description: 'quick description of list item',
      id: '123'
    }
  ];

  constructor(private projectTypeService: ProjectTypeService) { }

  get projectType() {
    return this.projectTypeService.type;
  }

  ngOnInit(): void {
  }

}
