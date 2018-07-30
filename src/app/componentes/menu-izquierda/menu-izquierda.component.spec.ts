import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzquierdaComponent } from './menu-izquierda.component';

describe('MenuIzquierdaComponent', () => {
  let component: MenuIzquierdaComponent;
  let fixture: ComponentFixture<MenuIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
