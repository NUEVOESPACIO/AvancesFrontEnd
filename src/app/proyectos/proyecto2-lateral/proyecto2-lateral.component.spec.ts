import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2LateralComponent } from './proyecto2-lateral.component';

describe('Proyecto2LateralComponent', () => {
  let component: Proyecto2LateralComponent;
  let fixture: ComponentFixture<Proyecto2LateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto2LateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto2LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
