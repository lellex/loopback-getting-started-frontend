import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { CoffeeshopService } from './coffeeshops/coffeeshop.service';
import { ReviewsService } from './reviews/reviews.service';

import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeshopsComponent,
    ReviewsComponent,
    LoginComponent,
    SignupComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/coffeeshops',
        pathMatch: 'full'
      },
      {
        path: 'coffeeshops',
        component: CoffeeshopsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ])
  ],
  providers: [
    CoffeeshopService,
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
