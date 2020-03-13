import { TestBed } from '@angular/core/testing';

import { InitializerService } from './initializer.service';

describe('InitializerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitializerService = TestBed.inject(InitializerService);
    expect(service).toBeTruthy();
  });
});
