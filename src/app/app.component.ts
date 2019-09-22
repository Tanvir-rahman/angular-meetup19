import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { faTwitter, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

declare var ol: any;
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
  faFacebook = faFacebook;
  latitude: number = 23.7817;
  longitude: number = 90.4005;
  map: any;
  vectorLayer: any;

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

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      interactions: ol.interaction.defaults({mouseWheelZoom:false}),
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 18
      }),
    });

    this.vectorLayer = new ol.layer.Vector({
      source:new ol.source.Vector({
      features: [new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([this.longitude, this.latitude], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        src: "https://img.icons8.com/plasticine/100/000000/marker.png"
        })
      })
    });
    this.map.addLayer(this.vectorLayer);
  }

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m,
      isFitWidth: true,
  })};

  toSpecificArea($event, name) {
    $event.preventDefault();
    document.getElementById(name).scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 600) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky');
     }
  }
}
