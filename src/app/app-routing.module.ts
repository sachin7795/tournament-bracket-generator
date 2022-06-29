import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {  
    path: 'matches-dashboard/:id',  
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/matches-dashboard/matches-dashboard.module')  
    .then(m => m.MatchesDashboardModule)  
  },
  {  
    path: 'countries',  
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/countries/countries.module')  
    .then(m => m.CountriesModule)  
  },
  {  
    path: 'players', 
    canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/players/players.module')  
    .then(m => m.PlayersModule)  
  },
  {  
    path: 'seasons', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/seasons/seasons.module')  
    .then(m => m.SeasonsModule)  
  },
  {  
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module')  
    .then(m => m.LoginModule)  
  },
  {  
    path: '**',  
    loadChildren: () => import('./pages/login/login.module')  
    .then(m => m.LoginModule)   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
