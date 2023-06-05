import { TestBed } from '@angular/core/testing';

import { InfoPaginasService } from './info-paginas.service';

describe('InfoPaginasService', () => {
  let service: InfoPaginasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPaginasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
