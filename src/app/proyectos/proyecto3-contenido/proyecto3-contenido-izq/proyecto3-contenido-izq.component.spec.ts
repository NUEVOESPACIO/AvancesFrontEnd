import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3ContenidoIzqComponent } from './proyecto3-contenido-izq.component';

describe('Proyecto3ContenidoIzqComponent', () => {
  let component: Proyecto3ContenidoIzqComponent;
  let fixture: ComponentFixture<Proyecto3ContenidoIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto3ContenidoIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto3ContenidoIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
