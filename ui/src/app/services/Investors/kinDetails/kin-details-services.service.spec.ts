import { TestBed } from '@angular/core/testing';

import { KinDetailsServicesService } from './kin-details-services.service';

describe('KinDetailsServicesService', () => {
  let service: KinDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
