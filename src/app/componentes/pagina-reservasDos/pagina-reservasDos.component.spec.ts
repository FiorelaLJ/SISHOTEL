import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaReservasComponentDos } from './pagina-reservasDos.component';

describe('PaginaReservasComponent', () => {
  let component: PaginaReservasComponentDos;
  let fixture: ComponentFixture<PaginaReservasComponentDos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaReservasComponentDos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaReservasComponentDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
