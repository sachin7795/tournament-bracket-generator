import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatchesDashboardComponent } from './matches-dashboard.component';
import { MatchesDashboardRoutingModule } from './matches-dashboard-routing.module';
import { MatchCardComponent } from 'src/app/components/match-card/match-card.component';
import { MatchCardTeamRowComponent } from 'src/app/components/match-card-team-row/match-card-team-row.component';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MatchesDashboardComponent,
    MatchCardComponent,
    MatchCardTeamRowComponent
  ],
  imports: [
    CommonModule,
    MatchesDashboardRoutingModule,
    MatIconModule,
    CustomPipesModule
  ],
  bootstrap: [MatchesDashboardComponent]
})
export class MatchesDashboardModule { }
