import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersimulacionesComponent } from './versimulaciones.component';

describe('VersimulacionesComponent', () => {
  let component: VersimulacionesComponent;
  let fixture: ComponentFixture<VersimulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersimulacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersimulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
