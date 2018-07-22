import { TestBed, inject } from '@angular/core/testing';

import { TakersService } from './takers.service';

describe('TakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakersService]
    });
  });

  it('should be created', inject([TakersService], (service: TakersService) => {
    expect(service).toBeTruthy();
  }));
});
