import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './film-service.service';

@Component({
  selector: 'app-film-service',
  templateUrl: './film-service.component.html',
  styleUrls: ['./film-service.component.css'],
})
export class FilmServiceComponent implements OnInit {
  Movies: any = [];
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  pag: number = 1;
  search: string = '';

  constructor(public filmService: FilmServiceService) {}



  changePagPlus() {
    this.pag = this.pag + 1;

    this.getMovies();
  }
  changePagMinus() {
    this.pag = this.pag - 1;

    this.getMovies();
  }
  getSearch() {
    this.filmService.getSearch(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }

  ngOnInit() {
    // Get movies list
    this.filmService.getMovies(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
  getMovies() {
    // Get movies list
    this.filmService.getMovies(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
}
