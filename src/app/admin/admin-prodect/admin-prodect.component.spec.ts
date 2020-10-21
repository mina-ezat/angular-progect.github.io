import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdectComponent } from './admin-prodect.component';

describe('AdminProdectComponent', () => {
  let component: AdminProdectComponent;
  let fixture: ComponentFixture<AdminProdectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
