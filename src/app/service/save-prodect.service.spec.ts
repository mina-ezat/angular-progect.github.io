import { TestBed } from '@angular/core/testing';

import { SaveProdectService } from './save-prodect.service';

describe('SaveProdectService', () => {
  let service: SaveProdectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveProdectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
