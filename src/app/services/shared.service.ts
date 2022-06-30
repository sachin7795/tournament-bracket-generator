import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getCommonHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
  }

}
