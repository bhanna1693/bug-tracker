import { Component, OnInit } from '@angular/core';
import {ProjectTypeService} from "../services/project-type.service";

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

  constructor(private projectTypeService: ProjectTypeService) { }

  get projectType() {
    return this.projectTypeService.type;
  }

  ngOnInit(): void {
  }

}
