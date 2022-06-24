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
    path: '',  
    loadChildren: () => import('./pages/matches-dashboard/matches-dashboard.module')  
    .then(m => m.MatchesDashboardModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
