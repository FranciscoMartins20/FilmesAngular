import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from '../film-service/film-service.service';
import { SerieServiceService } from '../serie-service/serie-service.service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css'],
})
export class HomeServiceComponent implements OnInit {
  Movies: any = [];
  Series: any = [];
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  pag: number = 1;
  search: string = '';

  constructor(
    public filmService: FilmServiceService,
    public seriesService: SerieServiceService
  ) {}
  getSearch() {
    this.filmService.getSearch(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
      this.seriesService.getSearch(this.search).subscribe((data: {}) => {
        this.apiResponse = data;
        this.Series = data;
      });
    });
  }

  getSeries() {
    // Get movies list
    this.seriesService.getSeries(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
  getMovies() {
    // Get movies list
    this.filmService.getMovies(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
  ngOnInit() {
    // Get movies list
    this.filmService.getMovies(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
      this.seriesService.getSeries(this.pag).subscribe((data: {}) => {
        this.apiResponse = data;
        this.Series = data;
      });
    });
  }
}
