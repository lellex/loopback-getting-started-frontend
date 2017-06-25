import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { CoffeeshopService } from './coffeeshops/coffeeshop.service';
import { CoffeeshopsComponent } from './coffeeshops/coffeeshops.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeshopsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CoffeeshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
