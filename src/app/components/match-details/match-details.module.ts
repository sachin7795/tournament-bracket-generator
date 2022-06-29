import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatchDetailsComponent } from './match-details.component';
import { MatchDetailsStatsComponent } from 'src/app/components/match-details-stats/match-details-stats.component';
import { MatchDetailsHeaderComponent } from 'src/app/components/match-details-header/match-details-header.component';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatchDetailsService } from 'src/app/services/match-details.service';

@NgModule({
  declarations: [
    MatchDetailsComponent,
    MatchDetailsStatsComponent,
    MatchDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CustomPipesModule,
    MatDialogModule
  ],
  providers: [MatchDetailsService],
  bootstrap: [MatchDetailsComponent]
})
export class MatchDetailsModule { }
