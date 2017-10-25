import { TestBed, inject } from '@angular/core/testing';

import { CreateControlsService } from './create-controls.service';

describe('CreateControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateControlsService]
    });
  });

  it('should be created', inject([CreateControlsService], (service: CreateControlsService) => {
    expect(service).toBeTruthy();
  }));
});
