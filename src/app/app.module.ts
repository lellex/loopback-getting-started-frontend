import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { CoffeeshopService } from './coffeeshops/coffeeshop.service';
import { ReviewsService } from './reviews/reviews.service';

import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeshopsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CoffeeshopService,
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
