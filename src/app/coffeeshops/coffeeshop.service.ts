import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coffeeshop } from './coffeeshop';

@Injectable()
export class CoffeeshopService {
    private coffeshopsUrl = 'https://fierce-sierra-30734.herokuapp.com/api/CoffeeShops';  // URL to web api
    
    constructor(private http: Http) { }
    
    getCoffeeshops(): Promise<Coffeeshop[]> {
    return this.http.get(this.coffeshopsUrl)
                .toPromise()
                .then(response => response.json() as Coffeeshop[])
                .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
