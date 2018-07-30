import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { resumenReserva } from './resumen-Reserva.component';

describe('PaginaLoginComponent', () => {
  let component: resumenReserva;
  let fixture: ComponentFixture<resumenReserva>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ resumenReserva ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(resumenReserva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
