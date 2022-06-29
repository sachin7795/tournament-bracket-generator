import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: User) {
    return this.http.post(environment.BACKEND_HOST + '/login', body);
  }

}
