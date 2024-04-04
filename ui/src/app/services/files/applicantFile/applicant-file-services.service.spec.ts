import { TestBed } from '@angular/core/testing';

import { ApplicantFileServicesService } from './applicant-file-services.service';

describe('ApplicantFileServicesService', () => {
  let service: ApplicantFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
