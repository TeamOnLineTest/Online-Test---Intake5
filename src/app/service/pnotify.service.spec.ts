import { TestBed, inject } from '@angular/core/testing';

import { PnotifyService } from './pnotify.service';

describe('PnotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PnotifyService]
    });
  });

  it('should be created', inject([PnotifyService], (service: PnotifyService) => {
    expect(service).toBeTruthy();
  }));
});
