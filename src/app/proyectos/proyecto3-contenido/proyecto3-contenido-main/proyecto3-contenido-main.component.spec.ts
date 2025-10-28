import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3ContenidoMainComponent } from './proyecto3-contenido-main.component';

describe('Proyecto3ContenidoMainComponent', () => {
  let component: Proyecto3ContenidoMainComponent;
  let fixture: ComponentFixture<Proyecto3ContenidoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto3ContenidoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto3ContenidoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
