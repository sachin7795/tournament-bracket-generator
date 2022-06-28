import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class SeasonsService {

  constructor(private http: HttpClient) { }

  getSeasons() {
    return this.http.get(environment.BACKEND_HOST + '/seasons');
  }
}
