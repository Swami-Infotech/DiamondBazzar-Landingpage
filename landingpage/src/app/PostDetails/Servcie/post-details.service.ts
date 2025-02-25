import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;


  // getpostdetails(id:number,){
  //   return this.http.get(this.baseurl + "Post/GetPostDetailsby/" + id)
  //  }

  
  getpostdetails(postID:number){
    return this.http.get(this.baseurl + "Post/GetPostDetailsForWeb?postID="+ postID )
   }

   addfavourite(data:any){
    return this.http.post(this.baseurl + "Post/AddPostasFavourite",data)
   }

}
