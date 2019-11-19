import { Tab1Page } from './../tab1/tab1.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;

  private userLatitude: number;
  private userLongitude: number;
  private loggedIn: boolean = false;

  constructor(private geolocation: Geolocation, public alertController: AlertController, public router: Router) { }

  ionViewDidEnter() {
    this.checkPermission();
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
    this.map = new Map('mapId').setView([-8.05389, -34.88111], 13);
    tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);
  }

  checkPermission() {
    if (this.loggedIn) {
      console.log("Usuário logado");
    } else {
      this.presentAlertConfirm();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Não',
          role: 'Não',
          cssClass: 'secondary',
          handler: () => {
            this.loginRecusado();
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('Tab1Page');
          }
        }
      ]
    });

    await alert.present();
  }

    async loginRecusado() {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Você não poderá ver as recomendações personalizadas',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
} 