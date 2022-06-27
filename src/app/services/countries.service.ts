import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';

@Injectable()
export class CountriesService {

  constructor() { }

  countries: Country[] = [
    {
        id: 1,
        name: 'Burkina',
        rank: 1
    },
    {
        id: 9,
        name: 'Gabon',
        rank: 2
    },
    {
        id: 2,
        name: 'Nigeria',
        rank: 3
    },
    {
        id: 3,
        name: 'Tunisia',
        rank: 4
    },
    {
        id: 4,
        name: 'Senegal',
        rank: 5
    },
    {
        id: 5,
        name: 'Cape Verde',
        rank: 6
    },
    {
        id: 6,
        name: 'Mali',
        rank: 7
    },
    {
        id: 7,
        name: 'Equitorial Country',
        rank: 8
    },
    {
        id: 10,
        name: 'Guinea',
        rank: 9
    },
    {
        id: 11,
        name: 'Gambia',
        rank: 10
    },
    {
        id: 12,
        name: 'Cameroon',
        rank: 11
    },
    {
        id: 13,
        name: 'Comoros',
        rank: 12
    },
    {
        id: 14,
        name: 'Egypt',
        rank: 13
    },
    {
        id: 15,
        name: 'Test Country 1',
        rank: 14
    },
    {
        id: 16,
        name: 'Test Country 2',
        rank: 15
    },
    {
        id: 17,
        name: 'Test Country 3',
        rank: 16
    }
];

  getCountries(): Country[] {
    return this.countries;
  }
}
