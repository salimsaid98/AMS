import { TestBed } from '@angular/core/testing';

import { InvestorsDetailsServicesService } from './investors-details-services.service';

describe('InvestorsDetailsServicesService', () => {
  let service: InvestorsDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorsDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
