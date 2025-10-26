import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2ContenidoComponent } from './proyecto2-contenido.component';

describe('Proyecto2ContenidoComponent', () => {
  let component: Proyecto2ContenidoComponent;
  let fixture: ComponentFixture<Proyecto2ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto2ContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto2ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
