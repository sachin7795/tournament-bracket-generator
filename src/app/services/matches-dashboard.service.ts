import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatchDetails } from '../models/match-details.model';
import { Tournament } from '../models/tournament.model';

@Injectable()
export class MatchesDashboardService {

  constructor(private http: HttpClient) { }

  getSeasonDetails(id:string) {
    return this.http.get(environment.BACKEND_HOST + '/seasonDetails/'+id);
  }

  saveSeasonDetails(tournamentData: Tournament) {
    return this.http.post(environment.BACKEND_HOST + '/seasonDetails', tournamentData);
  }

  saveMatchDetails(matchDetails: MatchDetails) {
    return this.http.post(environment.BACKEND_HOST + '/matchDetails', matchDetails);
  }
}
