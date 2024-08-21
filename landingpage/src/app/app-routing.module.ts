import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/View/home/home.component';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { TermsComponent } from './terms/terms/terms.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
