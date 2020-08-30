import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StonksLandingPageComponent} from './stonks-landing-page.component';

describe('StonksLandingPageComponent', () => {
  let component: StonksLandingPageComponent;
  let fixture: ComponentFixture<StonksLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonksLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonksLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
