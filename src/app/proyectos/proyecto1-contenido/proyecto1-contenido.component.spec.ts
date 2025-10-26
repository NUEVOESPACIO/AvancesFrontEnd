import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto1ContenidoComponent } from './proyecto1-contenido.component';

describe('Proyecto1ContenidoComponent', () => {
  let component: Proyecto1ContenidoComponent;
  let fixture: ComponentFixture<Proyecto1ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto1ContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto1ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
