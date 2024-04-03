import { TestBed } from '@angular/core/testing';

import { ApplicAndFileServicesService } from './applic-and-file-services.service';

describe('ApplicAndFileServicesService', () => {
  let service: ApplicAndFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicAndFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
