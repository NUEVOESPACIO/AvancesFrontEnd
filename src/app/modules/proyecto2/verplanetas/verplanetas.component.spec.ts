import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerplanetasComponent } from './verplanetas.component';

describe('VerplanetasComponent', () => {
  let component: VerplanetasComponent;
  let fixture: ComponentFixture<VerplanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerplanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerplanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
