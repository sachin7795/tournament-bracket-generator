import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(environment.BACKEND_HOST + '/players');
  }
}
