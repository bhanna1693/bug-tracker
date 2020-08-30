import {TestBed} from '@angular/core/testing';

import {StonksLandingPageService} from './stonks-landing-page.service';

describe('StonksLandingPageService', () => {
  let service: StonksLandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StonksLandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
