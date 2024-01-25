import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FilmServiceService {
  constructor(public http: HttpClient) {}

  apiKey = 'd1bfabdd369fe4e5af389bad25932f70';
  getSearch(search: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/movie?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US&query=' +
        search +
        '&page=1&include_adult=false'
    );
  }

  getMovies(pag: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=d1bfabdd369fe4e5af389bad25932f70&page=' +
        pag
    );
  }
}

// Listagem de filmes populares
// https://api.themoviedb.org/3/movie/popular
// • Listagem de séries em exibição
// https://api.themoviedb.org/3/tv/on_the_air
