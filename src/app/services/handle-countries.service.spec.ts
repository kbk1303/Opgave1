import { TestBed } from '@angular/core/testing';

import { HandleCountriesService } from './handle-countries.service';

describe('HandleCountriesService', () => {
  let service: HandleCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
