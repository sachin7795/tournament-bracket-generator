import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'matches-dashboard',  
    loadChildren: () => import('./pages/matches-dashboard/matches-dashboard.module')  
    .then(m => m.MatchesDashboardModule)  
  },
  {  
    path: 'match-details',  
    loadChildren: () => import('./pages/match-details/match-details.module')  
    .then(m => m.MatchDetailsModule)  
  },
  {  
    path: 'countries',  
    loadChildren: () => import('./pages/countries/countries.module')  
    .then(m => m.CountriesModule)  
  },
  {  
    path: 'players',  
    loadChildren: () => import('./pages/players/players.module')  
    .then(m => m.PlayersModule)  
  },
  {  
    path: 'seasons',  
    loadChildren: () => import('./pages/seasons/seasons.module')  
    .then(m => m.SeasonsModule)  
  },
  {  
    path: '',  
    loadChildren: () => import('./pages/countries/countries.module')  
    .then(m => m.CountriesModule)   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
