import { TestBed } from '@angular/core/testing';

import { LocalstorgService } from './localstorg.service';

describe('LocalstorgService', () => {
  let service: LocalstorgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
