import { TestBed } from '@angular/core/testing';

import { IrccFileServicesService } from './ircc-file-services.service';

describe('IrccFileServicesService', () => {
  let service: IrccFileServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrccFileServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
