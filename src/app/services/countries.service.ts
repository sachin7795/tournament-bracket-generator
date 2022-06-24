import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';

@Injectable()
export class CountriesService {

  constructor() { }

  countries: Country[] = [
    {
        name: 'Burkina',
        rank: 1
    },
    {
        name: 'Gabon',
        rank: 2
    },
    {
        name: 'Nigeria',
        rank: 3
    },
    {
        name: 'Tunisia',
        rank: 4
    },
    {
        name: 'Senegal',
        rank: 5
    },
    {
        name: 'Cape Verde',
        rank: 6
    },
    {
        name: 'Mali',
        rank: 7
    },
    {
        name: 'Equitorial Country',
        rank: 8
    },
    {
        name: 'Guinea',
        rank: 9
    },
    {
        name: 'Gambia',
        rank: 10
    },
    {
        name: 'Cameroon',
        rank: 11
    },
    {
        name: 'Comoros',
        rank: 12
    },
    {
        name: 'Egypt',
        rank: 13
    },
    {
        name: 'Test Country 1',
        rank: 14
    },
    {
        name: 'Test Country 2',
        rank: 15
    },
    {
        name: 'Test Country 3',
        rank: 16
    }
];

  getCountries(): Country[] {
    return this.countries;
  }
}
