import { TestBed } from '@angular/core/testing';

import { AbmsService } from './abms.service';

describe('AbmsService', () => {
  let service: AbmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
