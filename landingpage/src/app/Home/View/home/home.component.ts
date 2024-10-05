import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
declare var anime: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void { 
    AOS.init();
  }

  constructor(private renderer: Renderer2){}


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Adjust this value based on your navbar height (80px in this example)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }




  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    nav: true
  }
  

}
