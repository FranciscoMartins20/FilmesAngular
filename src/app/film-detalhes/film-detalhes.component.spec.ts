import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetalhesComponent } from './film-detalhes.component';

describe('FilmDetalhesComponent', () => {
  let component: FilmDetalhesComponent;
  let fixture: ComponentFixture<FilmDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
