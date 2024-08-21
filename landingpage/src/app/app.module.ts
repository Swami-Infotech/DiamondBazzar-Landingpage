import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/View/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { TermsComponent } from './terms/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
