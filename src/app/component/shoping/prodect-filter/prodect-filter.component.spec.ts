import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectFilterComponent } from './prodect-filter.component';

describe('ProdectFilterComponent', () => {
  let component: ProdectFilterComponent;
  let fixture: ComponentFixture<ProdectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
