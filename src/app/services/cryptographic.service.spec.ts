import { TestBed } from '@angular/core/testing';

import { CryptographicService } from './cryptographic.service';

describe('CryptographicService', () => {
  let service: CryptographicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptographicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
