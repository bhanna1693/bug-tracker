import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StonksSearchComponent} from './stonks-search.component';

describe('StonksSearchComponent', () => {
  let component: StonksSearchComponent;
  let fixture: ComponentFixture<StonksSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonksSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
