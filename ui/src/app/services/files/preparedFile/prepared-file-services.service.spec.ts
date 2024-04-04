import { TestBed } from '@angular/core/testing';

import { PreparedFileServicesService } from './prepared-file-services.service';

describe('PreparedFileServicesService', () => {
  let service: PreparedFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparedFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
