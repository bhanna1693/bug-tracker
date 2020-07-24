import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskQuickComponent } from './add-task-quick.component';

describe('AddTaskQuickComponent', () => {
  let component: AddTaskQuickComponent;
  let fixture: ComponentFixture<AddTaskQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
