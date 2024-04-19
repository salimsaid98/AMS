import { TestBed } from '@angular/core/testing';

import { InvestorsImageServicesService } from './investors-image-services.service';

describe('InvestorsImageServicesService', () => {
  let service: InvestorsImageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorsImageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
