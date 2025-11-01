import { TestBed } from '@angular/core/testing';

import { MenustatebyrolService } from './menustatebyrol.service';

describe('MenustatebyrolService', () => {
  let service: MenustatebyrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenustatebyrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
