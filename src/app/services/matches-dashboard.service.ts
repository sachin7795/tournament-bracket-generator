import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MatchesDashboardService {

  constructor(private http: HttpClient) { }

  getSeasonDetails(id:string) {
    return this.http.get(environment.BACKEND_HOST + '/seasonDetails/'+id);
  }
}
