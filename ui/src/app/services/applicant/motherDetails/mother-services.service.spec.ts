import { TestBed } from '@angular/core/testing';

import { MotherServicesService } from './mother-services.service';

describe('MotherServicesService', () => {
  let service: MotherServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
