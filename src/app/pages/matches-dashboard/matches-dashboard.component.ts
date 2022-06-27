import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchCard } from 'src/app/models/match-card.model';
import { Tournament } from 'src/app/models/tournament.model';

@Component({
  selector: 'matches-dashboard',
  templateUrl: './matches-dashboard.component.html',
  styleUrls: ['./matches-dashboard.component.scss']
})
export class MatchesDashboardComponent {

    constructor(private _route: Router) {}

    ngOnInit() {
      for(let i=1;i<9;i++) {
        this.testData.matchNumber = i;
        this.tournamentData.roundOf16[i-1] = {...this.testData}
      }
      for(let i=1;i<5;i++) {
        this.testData.matchNumber = i;
        this.tournamentData.quarterFinals[i-1] = {...this.testData}
      }
      for(let i=1;i<3;i++) {
        this.testData.matchNumber = i;
        this.tournamentData.semiFinals[i-1] = {...this.testData}
      }
      this.testData.matchNumber = 1;
      this.tournamentData.final = {...this.testData};
      console.log(this.tournamentData)
    }

    openMatchDetails() {  
      this._route.navigate(['match-details']);
    }

    tournamentData: Tournament = new Tournament();

    testData: MatchCard = {
      matchNumber: 1,
      stage: 'Round of 16',
      date: new Date(),
      status: 'Full-time',
      teamOne: {
          name: 'Burkina For Long Name',
          score: 2,
          penaltyScore: 4,
          flag: 'flag_circle',
          isWinner: true,
          rank: 1
      },
      teamTwo: {
          name: 'Gabon',
          score: 2,
          penaltyScore: 3,
          flag: 'flag_circle',
          isWinner: false,
          rank: 2
      },
      penalty: {
          totalPenalties: 5
      }
  }

}
