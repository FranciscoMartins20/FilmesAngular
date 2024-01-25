import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetalhesService } from './serie-detalhes.service';

@Component({
  selector: 'app-serie-detalhes',
  templateUrl: './serie-detalhes.component.html',
  styleUrls: ['./serie-detalhes.component.css'],
})
export class SerieDetalhesComponent implements OnInit {
  Credits: any;
  Series: any;
  id: string = '';
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(
    public serieService: SerieDetalhesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initCurrentSerie();
  }
  movieCast() {
    this.serieService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
  getMovies() {
    // Get movies list
    this.serieService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
  initCurrentSerie() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = id;
    }
    this.serieService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
    this.serieService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
}
