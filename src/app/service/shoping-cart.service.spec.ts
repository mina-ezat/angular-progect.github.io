import { TestBed } from '@angular/core/testing';

import { ShopingCartService } from './shoping-cart.service';

describe('ShopingCartService', () => {
  let service: ShopingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
