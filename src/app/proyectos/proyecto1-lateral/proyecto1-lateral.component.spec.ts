import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto1LateralComponent } from './proyecto1-lateral.component';

describe('Proyecto1LateralComponent', () => {
  let component: Proyecto1LateralComponent;
  let fixture: ComponentFixture<Proyecto1LateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto1LateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto1LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
