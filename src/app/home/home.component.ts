import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from '../film-service/film-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Movies: any = [];
  Series: any = [];
  apiResponse: any;

  constructor() {}

  ngOnInit(): void {}
}
