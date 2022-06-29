import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Season } from '../models/season.model';

@Injectable()
export class SeasonsService {

  constructor(private http: HttpClient) { }

  getSeasons() {
    return this.http.get(environment.BACKEND_HOST + '/seasons');
  }

  deleteSeason(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/season/'+id);
  }

  addSeason(season: Season) {
    return this.http.post(environment.BACKEND_HOST + '/season', season)
  }
}
