import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MatchDetailsService {

  constructor(private http: HttpClient) { }

  getMatchDetails(id:string) {
    return this.http.get(environment.BACKEND_HOST + '/matchDetails/'+id);
  }

}
