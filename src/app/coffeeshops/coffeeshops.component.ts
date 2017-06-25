import { Component, OnInit } from '@angular/core';

import { Coffeeshop } from './coffeeshop';
import { CoffeeshopService } from './coffeeshop.service';

@Component({
  selector: 'coffeeshops',
  templateUrl: './coffeeshops.component.html',
  styleUrls: ['./coffeeshops.component.css']
})
export class CoffeeshopsComponent implements OnInit {
  coffeeshops: Coffeeshop[] = [];

  constructor(private coffeeshopService: CoffeeshopService) { }

  ngOnInit(): void {
    this.coffeeshopService.getCoffeeshops()
      .then(coffeeshops => this.coffeeshops = coffeeshops);
  }

}
