import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {

  constructor() { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  // map: google.maps.Map;
  // lat = 40.730610;
  // lng = -73.935242;
  // coordinates = new google.maps.LatLng(this.lat, this.lng);
  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 8,
  // };
  // mapInitializer() {
  //   this.map = new google.maps.Map(this.gmap.nativeElement,
  //     this.mapOptions);
  // }
  ngOnInit() {
    // this.mapInitializer();
  }

}
