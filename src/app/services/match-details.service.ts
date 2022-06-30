import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';

@Injectable()
export class MatchDetailsService {

  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getMatchDetails(id:string) {
    return this.http.get(environment.BACKEND_HOST + '/matchDetails/'+id, { headers: this.headers });
  }

}
