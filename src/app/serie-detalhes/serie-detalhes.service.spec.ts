import { TestBed } from '@angular/core/testing';

import { SerieDetalhesService } from './serie-detalhes.service';

describe('SerieDetalhesService', () => {
  let service: SerieDetalhesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieDetalhesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
