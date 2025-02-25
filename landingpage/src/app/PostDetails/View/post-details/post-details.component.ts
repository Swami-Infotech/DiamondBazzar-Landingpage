import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import Swal from 'sweetalert2';
import { AttchmentType, Fav } from '../../Model/Postdetails';
import { PostDetailsService } from '../../Servcie/post-details.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  

  imgurl = environment.imgURL;
 
  mains:any;
  isHeartRed!: boolean;

  ByDefaultHeart:any;

  favs = new Fav();


  attachments: any[] = [];
  metaDatas:any;
  userDetails:any;
  selectedImageURL: string = '';
  selectedAttachment: any;
  selectedVideoURL : string = '';
  imageAttachments: any[] = [];
  videoAttachments: any;
  

  attcah  = AttchmentType;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const encryID = params['encryID'];
      this.getalldata (encryID);

      
    })
  }

  constructor(private service:PostDetailsService,private route:ActivatedRoute){}





  getalldata(postID: number) {

    var userID = Number(sessionStorage.getItem('userid'))

    this.service.getpostdetails(postID).subscribe(
      (resp: any) => {
        this.mains = [resp.data.postMainData];
        this.attachments = resp.data.postAttachments || [];
        console.log("Attachments:", this.attachments);
        this.metaDatas = resp.data.postMetaDatas;
        this.userDetails = resp.data.userDetails;

        this.imageAttachments = this.attachments.filter(att => att.attchmentType === this.attcah.Image);
        this.videoAttachments = this.attachments.filter(att => att.attchmentType === this.attcah.Video);

        if (this.imageAttachments.length > 0) {
          this.selectedImageURL = this.imageAttachments[0].postAttachmentURL;
        }
        if (this.videoAttachments.length > 0) {
          this.selectedVideoURL = this.videoAttachments[0].postAttachmentURL;
        }
        
        
        console.log("Post is :", resp.data);

        this.ByDefaultHeart = resp.data.isFavourite;
        this.isHeartRed = this.ByDefaultHeart;

        console.log('bydeault', this.ByDefaultHeart);
      }
    );
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }


  toggleHeart(postID: any) {
    const userid = sessionStorage.getItem('userid');
    
    if (!userid) {
      console.error('User ID not found in session storage');
      return;
    }
  
    const userID = Number(userid);
    
    if (isNaN(userID)) {
      console.error('Invalid user ID');
      return;
    }
  
    this.favs = {
      userID: userID,
      postID: postID
    };
  
    if (this.isHeartRed) {
      this.service.addfavourite(this.favs).subscribe(
        (response: any) => {
          if (response.status === true) {
            this.isHeartRed = false;
            Swal.fire({
              icon: 'success',
              title: 'Removed from Favorites',
              text: response.message,
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success',
              },
              buttonsStyling: false,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message,
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-danger',
              },
              buttonsStyling: false,
            });
          }
        }
      );
    } else {
      this.service.addfavourite(this.favs).subscribe(
        (response: any) => {
          if (response.status === true) {
            this.isHeartRed = true;
            Swal.fire({
              icon: 'success',
              title: 'Added to Favorites',
              text: response.message,
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success',
              },
              buttonsStyling: false,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message,
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-danger',
              },
              buttonsStyling: false,
            });
          }
        }
      );
    }
  }
  




  
  




  customeOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    autoplay: true,
    autoplayTimeout: 3500,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }


}
