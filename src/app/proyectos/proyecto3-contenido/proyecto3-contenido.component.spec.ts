import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3ContenidoComponent } from './proyecto3-contenido.component';

describe('Proyecto3ContenidoComponent', () => {
  let component: Proyecto3ContenidoComponent;
  let fixture: ComponentFixture<Proyecto3ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto3ContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto3ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
