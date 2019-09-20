import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-meetup19';
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  private urls: string[] = [
    'assets/images/gallery-image-1.JPG',
    'assets/images/gallery-image-2.JPG',
    'assets/images/gallery-image-3.JPG',
    'assets/images/gallery-image-4.JPG',
    'assets/images/gallery-image-5.JPG',
    'assets/images/gallery-image-6.JPG',
    'assets/images/gallery-image-7.JPG',
    'assets/images/gallery-image-8.JPG',
    'assets/images/gallery-image-9.JPG',
    'assets/images/gallery-image-11.JPG',
    'assets/images/gallery-image-12.JPG',
    'assets/images/gallery-image-13.JPG',
  ];


  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
        imageUrl: m
  })};

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 100) {
  //      let element = document.getElementById('navbar');
  //      element.classList.add('sticky');
  //    } else {
  //     let element = document.getElementById('navbar');
  //       element.classList.remove('sticky');
  //    }
  // }
}
