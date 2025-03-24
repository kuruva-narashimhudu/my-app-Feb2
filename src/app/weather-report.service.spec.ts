import { TestBed } from '@angular/core/testing';

import { WeatherReportService } from './weather-report.service';

describe('WeatherReportService', () => {
  let service: WeatherReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
