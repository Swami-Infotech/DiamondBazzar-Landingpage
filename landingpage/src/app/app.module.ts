import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/View/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { TermsComponent } from './terms/terms/terms.component';
import { DownloadComponent } from './download/download.component';
import { PostDetailsComponent } from './PostDetails/View/post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivacyComponent,
    TermsComponent,
    DownloadComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
