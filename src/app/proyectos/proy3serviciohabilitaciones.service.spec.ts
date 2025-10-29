import { TestBed } from '@angular/core/testing';

import { Proy3serviciohabilitacionesService } from './proy3serviciohabilitaciones.service';

describe('Proy3serviciohabilitacionesService', () => {
  let service: Proy3serviciohabilitacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proy3serviciohabilitacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
