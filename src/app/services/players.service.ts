import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';
import { SharedService } from './shared.service';

@Injectable()
export class PlayersService {

  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getPlayers() {
    return this.http.get(environment.BACKEND_HOST + '/players', { headers: this.headers });
  }

  addPlayer(player: Player) {
    return this.http.post(environment.BACKEND_HOST + '/player', player, { headers: this.headers });
  }

  updatePlayer(player: Player) {
    return this.http.put(environment.BACKEND_HOST + '/player/'+player.id, player, { headers: this.headers });
  }

  deletePlayer(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/player/'+id, { headers: this.headers });
  }
}
