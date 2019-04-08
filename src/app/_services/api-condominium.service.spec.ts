import { TestBed } from '@angular/core/testing';

import { ApiCondominiumService } from './api-condominium.service';

describe('ApiCondominiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCondominiumService = TestBed.get(ApiCondominiumService);
    expect(service).toBeTruthy();
  });
});
