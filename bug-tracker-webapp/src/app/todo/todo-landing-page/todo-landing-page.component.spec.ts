import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLandingPageComponent } from './todo-landing-page.component';

describe('TodoLandingPageComponent', () => {
  let component: TodoLandingPageComponent;
  let fixture: ComponentFixture<TodoLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
