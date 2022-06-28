import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchCard } from 'src/app/models/match-card.model';
import { Tournament } from 'src/app/models/tournament.model';
import { MatchesDashboardService } from 'src/app/services/matches-dashboard.service';

@Component({
  selector: 'matches-dashboard',
  templateUrl: './matches-dashboard.component.html',
  styleUrls: ['./matches-dashboard.component.scss']
})
export class MatchesDashboardComponent {
  
    tournamentData: Tournament = new Tournament();

    constructor(private _route: Router, 
                private mdService: MatchesDashboardService,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((obj)=>{
        let id = <string>obj.get('id');
        this.fetchDetails(id);
      });
    }

    fetchDetails(id: string) {
      this.mdService.getSeasonDetails(id).subscribe(
        (res) => {
          this.tournamentData = <Tournament>res;
        },
        (err) => {
          console.log(err);
        }
      )
    }

    openMatchDetails() {  
      this._route.navigate(['match-details']);
    }


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
