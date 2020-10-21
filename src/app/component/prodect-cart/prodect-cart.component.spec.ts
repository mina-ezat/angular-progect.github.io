import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectCartComponent } from './prodect-cart.component';

describe('ProdectCartComponent', () => {
  let component: ProdectCartComponent;
  let fixture: ComponentFixture<ProdectCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
