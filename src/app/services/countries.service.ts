import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { UtilityFunctions } from '../utilities/utility-functions';

@Injectable()
export class CountriesService {

  constructor() { }

  countries: Country[] = [
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Burkina',
        rank: 1
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Gabon',
        rank: 2
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Nigeria',
        rank: 3
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Tunisia',
        rank: 4
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Senegal',
        rank: 5
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Cape Verde',
        rank: 6
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Mali',
        rank: 7
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Equitorial Country',
        rank: 8
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Guinea',
        rank: 9
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Gambia',
        rank: 10
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Cameroon',
        rank: 11
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Comoros',
        rank: 12
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Egypt',
        rank: 13
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Test Country 1',
        rank: 14
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Test Country 2',
        rank: 15
    },
    {
        id: UtilityFunctions.generateUuid(),
        name: 'Test Country 3',
        rank: 16
    }
];

  getCountries(): Country[] {
    return this.countries;
  }
}
