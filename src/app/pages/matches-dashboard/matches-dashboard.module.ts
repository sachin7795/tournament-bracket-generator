import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatchesDashboardComponent } from './matches-dashboard.component';
import { MatchesDashboardRoutingModule } from './matches-dashboard-routing.module';
import { MatchCardComponent } from 'src/app/components/match-card/match-card.component';
import { MatchCardTeamRowComponent } from 'src/app/components/match-card-team-row/match-card-team-row.component';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { CommonModule } from '@angular/common';
import { MatchesDashboardService } from 'src/app/services/matches-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { UpdateMatchCardComponent } from 'src/app/components/update-match-card/update-match-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MatchesDashboardComponent,
    MatchCardComponent,
    MatchCardTeamRowComponent,
    UpdateMatchCardComponent
  ],
  imports: [
    CommonModule,
    MatchesDashboardRoutingModule,
    MatIconModule,
    CustomPipesModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [MatchesDashboardService, MatDatepickerModule],
  bootstrap: [MatchesDashboardComponent]
})
export class MatchesDashboardModule { }
