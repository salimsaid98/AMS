import { TestBed } from '@angular/core/testing';

import { ApplicantPreparedFileServicesService } from './applicant-prepared-file-services.service';

describe('ApplicantPreparedFileServicesService', () => {
  let service: ApplicantPreparedFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantPreparedFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
