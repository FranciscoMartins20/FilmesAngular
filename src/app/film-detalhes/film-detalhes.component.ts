import { Component, OnInit } from '@angular/core';
import { FilmDetalhesService } from './film-detalhes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detalhes',
  templateUrl: './film-detalhes.component.html',
  styleUrls: ['./film-detalhes.component.css'],
})
export class FilmDetalhesComponent implements OnInit {
  Movies: any;
  Credits: any;
  id: string = '';
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  video: string = '';
  constructor(
    public filmService: FilmDetalhesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initCurrentMovie();
  }
  getVideo() {
    this.filmService.getVideo(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
  getMovies() {
    // Get movies list
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
  movieCast() {
    this.filmService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
  initCurrentMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = id;
    }
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
    this.filmService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
}
