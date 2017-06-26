import { Input, Component, OnInit } from '@angular/core';

import { Review } from './review';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() coffeeshop: any;
  reviews: Review[] = []
  
  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.reviewsService.getReviews({"coffeeShopId": this.coffeeshop.id})
      .then(reviews => this.reviews = reviews);
  }

}
