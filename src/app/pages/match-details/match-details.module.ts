import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatchDetailsComponent } from './match-details.component';
import { MatchDetailsRoutingModule } from './match-details-routing.module';
import { MatchDetailsStatsComponent } from 'src/app/components/match-details-stats/match-details-stats.component';
import { MatchDetailsHeaderComponent } from 'src/app/components/match-details-header/match-details-header.component';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MatchDetailsComponent,
    MatchDetailsStatsComponent,
    MatchDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    MatchDetailsRoutingModule,
    MatIconModule,
    CustomPipesModule
  ],
  bootstrap: [MatchDetailsComponent]
})
export class MatchDetailsModule { }
