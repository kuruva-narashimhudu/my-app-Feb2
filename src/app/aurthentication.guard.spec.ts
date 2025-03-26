import { TestBed } from '@angular/core/testing';

import { AurthenticationGuard } from './aurthentication.guard';

describe('AurthenticationGuard', () => {
  let guard: AurthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AurthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
