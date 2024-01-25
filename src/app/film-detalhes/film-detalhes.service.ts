import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmDetalhesService {
  baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
  }
  apiKey = 'd1bfabdd369fe4e5af389bad25932f70';
  getCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=' +
        this.apiKey +
        '&language=en-US'
    );
  }
  getCreditsCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '/credits?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US'
    );
  }
  getVideo(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=d1bfabdd369fe4e5af389bad25932f70&append_to_response=videos'
    );
  }
}
