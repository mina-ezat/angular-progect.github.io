import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdectComponent } from './new-prodect.component';

describe('NewProdectComponent', () => {
  let component: NewProdectComponent;
  let fixture: ComponentFixture<NewProdectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProdectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
