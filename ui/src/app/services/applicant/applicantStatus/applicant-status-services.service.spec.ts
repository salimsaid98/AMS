import { TestBed } from '@angular/core/testing';

import { ApplicantStatusServicesService } from './applicant-status-services.service';

describe('ApplicantStatusServicesService', () => {
  let service: ApplicantStatusServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantStatusServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
