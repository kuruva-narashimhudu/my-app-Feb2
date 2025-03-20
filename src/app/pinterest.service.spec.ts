import { TestBed } from '@angular/core/testing';

import { PinterestService } from './pinterest.service';

describe('PinterestService', () => {
  let service: PinterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
