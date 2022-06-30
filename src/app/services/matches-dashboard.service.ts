import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatchDetails } from '../models/match-details.model';
import { Tournament } from '../models/tournament.model';
import { SharedService } from './shared.service';

@Injectable()
export class MatchesDashboardService {

  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getSeasonDetails(id:string) {
    return this.http.get(environment.BACKEND_HOST + '/seasonDetails/'+id, { headers: this.headers });
  }

  saveSeasonDetails(tournamentData: Tournament) {
    return this.http.post(environment.BACKEND_HOST + '/seasonDetails', tournamentData, { headers: this.headers });
  }

  saveMatchDetails(matchDetails: MatchDetails) {
    return this.http.post(environment.BACKEND_HOST + '/matchDetails', matchDetails, { headers: this.headers });
  }
}
