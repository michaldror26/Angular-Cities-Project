import { TestBed, inject } from '@angular/core/testing';

import { IsraelCitiesService } from './israel-cities.service';

describe('IsraelCitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsraelCitiesService]
    });
  });

  it('should be created', inject([IsraelCitiesService], (service: IsraelCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
