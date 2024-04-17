import { TestBed } from '@angular/core/testing';

import { InvestorsPackageServicesService } from './investors-package-services.service';

describe('InvestorsPackageServicesService', () => {
  let service: InvestorsPackageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorsPackageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
