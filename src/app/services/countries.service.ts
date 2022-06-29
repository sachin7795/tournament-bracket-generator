import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(environment.BACKEND_HOST + '/countries');
  }

  addCountry(country: Country) {
    return this.http.post(environment.BACKEND_HOST + '/country', country);
  }

  updateCountry(country: Country) {
    return this.http.put(environment.BACKEND_HOST + '/country/'+country.id, country);
  }

  deleteCountry(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/country/'+id);
  }
}
