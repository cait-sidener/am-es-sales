import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: '../assets/images/IMG_2227.PNG',
              medium: '../assets/images/IMG_2227.PNG',
              big: '../assets/images/IMG_2227.PNG'
          },
          {
              small: '../assets/images/IMG_2228.PNG',
              medium: '../assets/images/IMG_2228.PNG',
              big: '../assets/images/IMG_2228.PNG'
          },
          {
              small: '../assets/images/IMG_2229.PNG',
              medium: '../assets/images/IMG_2229.PNG',
              big: '../assets/images/IMG_2229.PNG'
          },
          {
            small: '../assets/images/IMG_2230.PNG',
            medium: '../assets/images/IMG_2230.PNG',
            big: '../assets/images/IMG_2230.PNG'
        }
      ];
  }

}
