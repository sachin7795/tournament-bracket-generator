import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(environment.BACKEND_HOST + '/countries');
  }
}
