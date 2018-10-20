import { TestBed } from '@angular/core/testing';

import { UploadDetailsService } from './uploaddetails.service';

describe('UploaddetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadDetailsService = TestBed.get(UploadDetailsService);
    expect(service).toBeTruthy();
  });
});
