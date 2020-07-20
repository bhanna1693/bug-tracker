import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoByIdPageComponent } from './todo-by-id-page.component';

describe('TodoByIdPageComponent', () => {
  let component: TodoByIdPageComponent;
  let fixture: ComponentFixture<TodoByIdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoByIdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoByIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
