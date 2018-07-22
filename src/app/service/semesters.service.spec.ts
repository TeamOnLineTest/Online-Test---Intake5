import { TestBed, inject } from '@angular/core/testing';

import { SemestersService } from './semesters.service';

describe('SemestersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemestersService]
    });
  });

  it('should be created', inject([SemestersService], (service: SemestersService) => {
    expect(service).toBeTruthy();
  }));
});
