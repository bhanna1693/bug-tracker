import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navItems = [
    {
      title: 'Today',
      icon: 'today',
    },
    {
      title: 'Scheduled',
      icon: 'schedule',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
