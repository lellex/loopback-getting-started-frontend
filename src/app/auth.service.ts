import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class AuthService {
  private loginUrl = 'https://fierce-sierra-30734.herokuapp.com/api/User/login';  // URL to web api
  
  constructor(private http: Http) { }
  
  login(): Promise<User[]> {
  return this.http.get(this.loginUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
