import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShopingComponent } from './order-shoping.component';

describe('OrderShopingComponent', () => {
  let component: OrderShopingComponent;
  let fixture: ComponentFixture<OrderShopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
