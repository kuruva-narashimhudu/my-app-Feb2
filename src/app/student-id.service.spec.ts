import { TestBed } from '@angular/core/testing';

import { StudentIdService } from './student-id.service';

describe('StudentIdService', () => {
  let service: StudentIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
