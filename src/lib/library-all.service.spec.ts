import { TestBed } from '@angular/core/testing';

import { LibraryAllService } from './library-all.service';

describe('LibraryAllService', () => {
  let service: LibraryAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
