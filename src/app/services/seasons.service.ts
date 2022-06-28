import { Injectable } from '@angular/core';
import { Season } from '../models/season.model';
import { UtilityFunctions } from '../utilities/utility-functions';

@Injectable()
export class SeasonsService {

  constructor() { }

  seasons: Season[] = [
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Season 1',
        status: "Completed"
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Season 2',
        status: "Inprogress"
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Season 3',
        status: "Completed"
    }
];

  getSeasons(): Season[] {
    return this.seasons;
  }
}
