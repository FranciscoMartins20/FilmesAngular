import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerieDetalhesService {
  constructor(public http: HttpClient) {}
  apiKey = 'd1bfabdd369fe4e5af389bad25932f70';
  getCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/' +
        id +
        '?api_key=' +
        this.apiKey +
        '&language=en-US'
    );
  }
  getCreditsCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/' +
        id +
        '/credits?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US'
    );
  }
}
