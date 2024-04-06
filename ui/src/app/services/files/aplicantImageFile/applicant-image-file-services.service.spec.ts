import { TestBed } from '@angular/core/testing';

import { ApplicantImageFileServicesService } from './applicant-image-file-services.service';

describe('ApplicantImageFileServicesService', () => {
  let service: ApplicantImageFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantImageFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
