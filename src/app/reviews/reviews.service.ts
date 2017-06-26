import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Review } from './review';

@Injectable()
export class ReviewsService {
  private reviewsUrl = 'https://fierce-sierra-30734.herokuapp.com/api/Reviews';  // URL to web api
  
  constructor(private http: Http) { }
  
  getReviews(filters): Promise<Review[]> {
  return this.http.get(this.reviewsUrl + '?filter=[include]=reviewer&' + JSON.stringify(filters))
              .toPromise()
              .then(response => response.json() as Review[])
              .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
