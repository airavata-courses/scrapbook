import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  fetchUserData(email:string) {
    return this.http.get(`${GATEWAY_URL}/users/login`)
  }
}
