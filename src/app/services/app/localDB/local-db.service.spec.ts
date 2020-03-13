import { TestBed } from '@angular/core/testing';

import { LocalDBService } from './local-db.service';

describe('LocalDBService', () => {
  let service: LocalDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
