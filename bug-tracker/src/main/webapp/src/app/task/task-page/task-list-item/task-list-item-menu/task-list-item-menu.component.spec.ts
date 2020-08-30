import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskListItemMenuComponent} from './task-list-item-menu.component';

describe('TaskListItemMenuComponent', () => {
  let component: TaskListItemMenuComponent;
  let fixture: ComponentFixture<TaskListItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
