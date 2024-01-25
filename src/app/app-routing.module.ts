import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetalhesComponent } from './film-detalhes/film-detalhes.component';
import { FilmPopularComponent } from './film-popular/film-popular.component';
import { HomeComponent } from './home/home.component';
import { SerieDetalhesComponent } from './serie-detalhes/serie-detalhes.component';
import { SeriePopularComponent } from './serie-popular/serie-popular.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmPopularComponent },
  { path: 'filmes/filmes-detalhes/:id', component: FilmDetalhesComponent },
  { path: 'series', component: SeriePopularComponent },
  { path: 'series/series-detalhes/:id', component: SerieDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
