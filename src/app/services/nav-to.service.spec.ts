import { TestBed, inject } from '@angular/core/testing';

import { NavToService } from './nav-to.service';

describe('NavToService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavToService]
    });
  });

  it('should be created', inject([NavToService], (service: NavToService) => {
    expect(service).toBeTruthy();
  }));
});
