import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(environment.BACKEND_HOST + '/players');
  }

  addPlayer(player: Player) {
    return this.http.post(environment.BACKEND_HOST + '/player', player);
  }

  updatePlayer(player: Player) {
    return this.http.put(environment.BACKEND_HOST + '/player/'+player.id, player);
  }

  deletePlayer(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/player/'+id);
  }
}
