import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopingComponent } from './all-shoping.component';

describe('AllShopingComponent', () => {
  let component: AllShopingComponent;
  let fixture: ComponentFixture<AllShopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
