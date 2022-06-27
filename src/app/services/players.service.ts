import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable()
export class PlayersService {

  constructor() { }

  players: Player[] = [
    {
        firstName: 'Test',
        lastName: 'Player',
        gender: 'Male',
        birthDate: new Date('24-09-1987'),
        id: 1
    },
    {
        firstName: 'Test',
        lastName: 'Player 1',
        gender: 'Male',
        birthDate: new Date('24-09-1986'),
        id: 2
    }
];

  getPlayers(): Player[] {
    return this.players;
  }
}
