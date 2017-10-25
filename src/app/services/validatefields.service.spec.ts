import { TestBed, inject } from '@angular/core/testing';

import { ValidatefieldsService } from './validatefields.service';

describe('ValidatefieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatefieldsService]
    });
  });

  it('should be created', inject([ValidatefieldsService], (service: ValidatefieldsService) => {
    expect(service).toBeTruthy();
  }));
});
