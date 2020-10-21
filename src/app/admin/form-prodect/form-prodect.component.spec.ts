import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdectComponent } from './form-prodect.component';

describe('FormProdectComponent', () => {
  let component: FormProdectComponent;
  let fixture: ComponentFixture<FormProdectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProdectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
