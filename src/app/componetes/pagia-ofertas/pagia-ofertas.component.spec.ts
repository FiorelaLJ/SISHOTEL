import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagiaOfertasComponent } from './pagia-ofertas.component';

describe('PagiaOfertasComponent', () => {
  let component: PagiaOfertasComponent;
  let fixture: ComponentFixture<PagiaOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagiaOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagiaOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
