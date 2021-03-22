import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  fetchUserData(email: string) {
    return this.http.get(`${GATEWAY_URL}/users/login`);
  }

  fetchUsersBySubstring(sub: string) {
    return this.http.get(`${GATEWAY_URL}/users?search=${sub}`);
  }

  onSignup(email: string, password: string, name: string) {
    return this.http.post(`${GATEWAY_URL}/signup`, {email: email, password: password, name: name});
  }

  onCustomLogin(email: string, password: string) {
    return this.http.post(`${GATEWAY_URL}/customlogin`, {email: email, password: password})
  }
}
