import { TestBed } from '@angular/core/testing';

import { FatherServicesService } from './father-services.service';

describe('FatherServicesService', () => {
  let service: FatherServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatherServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
