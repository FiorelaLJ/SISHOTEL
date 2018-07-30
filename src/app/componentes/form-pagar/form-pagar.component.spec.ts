import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPagarComponent } from './form-pagar.component';

describe('PaginaLoginComponent', () => {
  let component: PaginaPagarComponent;
  let fixture: ComponentFixture<PaginaPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
