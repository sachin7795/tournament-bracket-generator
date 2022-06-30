import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';
import { SharedService } from './shared.service';

@Injectable()
export class CountriesService {
  
  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getCountries() {
    return this.http.get(environment.BACKEND_HOST + '/countries', { headers: this.headers });
  }

  addCountry(country: Country) {
    return this.http.post(environment.BACKEND_HOST + '/country', country, { headers: this.headers });
  }

  updateCountry(country: Country) {
    return this.http.put(environment.BACKEND_HOST + '/country/'+country.id, country, { headers: this.headers });
  }

  deleteCountry(id: string) {
    return this.http.delete(environment.BACKEND_HOST + '/country/'+id, { headers: this.headers });
  }
}
