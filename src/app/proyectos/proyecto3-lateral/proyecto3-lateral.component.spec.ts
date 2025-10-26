import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3LateralComponent } from './proyecto3-lateral.component';

describe('Proyecto3LateralComponent', () => {
  let component: Proyecto3LateralComponent;
  let fixture: ComponentFixture<Proyecto3LateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto3LateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto3LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
