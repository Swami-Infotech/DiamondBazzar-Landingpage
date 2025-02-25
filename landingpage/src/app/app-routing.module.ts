import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/View/home/home.component';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { TermsComponent } from './terms/terms/terms.component';
import { DownloadComponent } from './download/download.component';
import { PostDetailsComponent } from './PostDetails/View/post-details/post-details.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      }
    ]
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"privacy",
    component:PrivacyComponent
  },
  {
    path:"terms",
    component:TermsComponent
  },
  {
    path:"download",
    component:DownloadComponent
  },
  {
    path:"PostDetails/:encryID",
    component:PostDetailsComponent
  },
  {
    path:"Header",
    component:HeaderComponent
  },
  {
    path:"Footer",
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
