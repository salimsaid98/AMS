import { TestBed } from '@angular/core/testing';

import { RelativeServicesService } from './relative-services.service';

describe('RelativeServicesService', () => {
  let service: RelativeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelativeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
