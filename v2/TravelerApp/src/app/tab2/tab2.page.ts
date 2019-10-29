import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  map: Map;

  private userLatitude: any;
  private userLongitude: any;

  ionViewDidEnter() { this.leafletMap(); }
  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([-8.05389, -34.88111], 13);
    tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);
  }
  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
} 