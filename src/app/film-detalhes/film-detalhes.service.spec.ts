import { TestBed } from '@angular/core/testing';

import { FilmDetalhesService } from './film-detalhes.service';

describe('FilmDetalhesService', () => {
  let service: FilmDetalhesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmDetalhesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
