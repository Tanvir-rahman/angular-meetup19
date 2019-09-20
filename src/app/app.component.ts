import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

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
