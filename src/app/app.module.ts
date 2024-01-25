import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmPopularComponent } from './film-popular/film-popular.component';
import { SeriePopularComponent } from './serie-popular/serie-popular.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmServiceComponent } from './film-service/film-service.component';
import { SerieServiceComponent } from './serie-service/serie-service.component';
import { FormsModule } from '@angular/forms';
import { FilmDetalhesComponent } from './film-detalhes/film-detalhes.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';
import { HomeServiceComponent } from './home-service/home-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmPopularComponent,
    SeriePopularComponent,
    HomeComponent,
    NavbarComponent,
    FilmServiceComponent,
    SerieServiceComponent,
    FilmDetalhesComponent,
    SerieDetalhesComponent,
    HomeServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    FilmServiceComponent,
    SerieServiceComponent,
    HomeServiceComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
