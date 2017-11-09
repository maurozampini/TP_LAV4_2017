import { TestBed, inject } from '@angular/core/testing';

import { SwalService } from './swal.service';

describe('SwalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalService]
    });
  });

  it('should be created', inject([SwalService], (service: SwalService) => {
    expect(service).toBeTruthy();
  }));
});
