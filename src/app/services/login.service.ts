import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { SharedService } from './shared.service';

@Injectable()
export class LoginService {

  headers: HttpHeaders = this.sharedService.getCommonHeaders();

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  login(body: User) {
    return this.http.post(environment.BACKEND_HOST + '/login', body, { headers: this.headers });
  }

}
