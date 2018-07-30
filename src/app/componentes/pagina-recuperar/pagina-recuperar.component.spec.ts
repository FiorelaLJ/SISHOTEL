import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecuperarComponent } from './pagina-recuperar.component';

describe('PaginaRecuperarComponent', () => {
  let component: PaginaRecuperarComponent;
  let fixture: ComponentFixture<PaginaRecuperarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRecuperarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
