import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { UtilityFunctions } from '../utilities/utility-functions';

@Injectable()
export class PlayersService {

  constructor() { }

  players: Player[] = [
    {
        firstName: 'Test',
        lastName: 'Player',
        gender: 'male',
        birthDate: new Date('09-24-1987'),
        id: UtilityFunctions.generateUuid()
    },
    {
        firstName: 'Test',
        lastName: 'Player 1',
        gender: 'male',
        birthDate: new Date('09-24-1986'),
        id: UtilityFunctions.generateUuid()
    }
];

  getPlayers(): Player[] {
    return this.players;
  }
}
