import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  private id;
  
  constructor(elm: ElementRef) {
    this.id = elm.nativeElement.id; 
    console.log(this.id)
  }

  ngOnInit() {
  }

}
