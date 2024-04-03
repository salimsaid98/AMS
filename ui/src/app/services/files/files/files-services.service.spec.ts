import { TestBed } from '@angular/core/testing';

import { FilesServicesService } from './files-services.service';

describe('FilesServicesService', () => {
  let service: FilesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
