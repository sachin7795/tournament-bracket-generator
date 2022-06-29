import { Component } from '@angular/core';
import { MatchDetails } from 'src/app/models/match-details.model';

@Component({
  selector: 'match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

    constructor() {}

    matchDetails: MatchDetails = {
      tournamentName: 'Nations League',
      date: new Date(),
      status: 'Full-time',
      stage: 'Quarter Final',
      teamOne: {
          name: 'Italy',
          flag: 'flag_circle',
          score: 2,
          rank: 1,
          stats: {
              shots: 13,
              shotsOnTarget: 4,
              possession: 40,
              passes: 230,
              passAccuracy: 60,
              fouls: 5,
              yellowCards: 8
          }
      },
      teamTwo: {
          name: 'Belgium',
          flag: 'flag_circle',
          score: 1,
          rank: 2,
          stats: {
              shots: 23,
              shotsOnTarget: 9,
              possession: 60,
              passes: 430,
              passAccuracy: 70,
              fouls: 9,
              yellowCards: 12
          }
      }
  }
}
