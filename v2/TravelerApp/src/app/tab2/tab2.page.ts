import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;

  private userLatitude: any;
  private userLongitude: any;

  constructor(private geolocation: Geolocation) { }

  ionViewDidEnter() { 
    this.leafletMap(); 
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.userLatitude = resp.coords.latitude;
      this.userLongitude = resp.coords.longitude;
      console.log('lat: ' + this.userLatitude);
      console.log('lng: ' + this.userLongitude);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    }


  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([-8.05389, -34.88111], 18);
    tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);
  }
  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
} 