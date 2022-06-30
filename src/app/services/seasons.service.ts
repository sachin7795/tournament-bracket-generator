import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Season } from '../models/season.model';
import { SharedService } from './shared.service';

@Injectable()
export class SeasonsService {

  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getSeasons() {
    return this.http.get(environment.BACKEND_HOST + '/seasons', { headers: this.headers });
  }

  deleteSeason(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/season/'+id, { headers: this.headers });
  }

  addSeason(season: Season) {
    return this.http.post(environment.BACKEND_HOST + '/season', season, { headers: this.headers })
  }
}
