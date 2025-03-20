import { TestBed } from '@angular/core/testing';

import { FlipkartDitelsService } from './flipkart-ditels.service';

describe('FlipkartDitelsService', () => {
  let service: FlipkartDitelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartDitelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
