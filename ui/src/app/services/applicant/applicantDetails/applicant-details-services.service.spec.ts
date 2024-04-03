import { TestBed } from '@angular/core/testing';

import { ApplicantDetailsServicesService } from './applicant-details-services.service';

describe('ApplicantDetailsServicesService', () => {
  let service: ApplicantDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
