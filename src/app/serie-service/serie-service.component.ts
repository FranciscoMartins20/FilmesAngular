import { Component, OnInit } from '@angular/core';
import { SerieServiceService } from './serie-service.service';
@Component({
  selector: 'app-serie-service',
  templateUrl: './serie-service.component.html',
  styleUrls: ['./serie-service.component.css'],
})
export class SerieServiceComponent implements OnInit {
  Series: any = [];
  apiResponse: any;
  pag: number = 1;
  search: string = '';

  constructor(public seriesService: SerieServiceService) {}

  changePagPlus() {
    this.pag = this.pag + 1;

    this.getSeries();
  }
  changePagMinus() {
    this.pag = this.pag - 1;

    this.getSeries();
  }

  ngOnInit() {
    //Get Series list
    this.seriesService.getSeries(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
  getSearch() {
    this.seriesService.getSearch(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }

  getSeries() {
    // Get movies list
    this.seriesService.getSeries(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
}
