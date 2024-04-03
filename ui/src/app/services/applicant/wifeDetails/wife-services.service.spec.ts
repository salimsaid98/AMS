import { TestBed } from '@angular/core/testing';

import { WifeServicesService } from './wife-services.service';

describe('WifeServicesService', () => {
  let service: WifeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
