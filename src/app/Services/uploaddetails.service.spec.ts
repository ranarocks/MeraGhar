import { TestBed } from '@angular/core/testing';

import { UploaddetailsService } from './uploaddetails.service';

describe('UploaddetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploaddetailsService = TestBed.get(UploaddetailsService);
    expect(service).toBeTruthy();
  });
});
