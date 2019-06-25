import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 48.864716;
  lng = 2.349014;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 50.38, lng: 3.03, alpha: 1, region: 'Nord' }, // Nord
    { lat: 	49.54, lng: 2.16, alpha: 1, region: 'Picardie' }, // Picardie
    { lat: 45.763420, lng: 4.834277, alpha: 1, region: 'Rhones-Alpes' }, // Rhones-Alpes
    { lat: 43.949318, lng: 4.805528, alpha: 1, region: 'Provence' }, // Provence
    { lat: 42.697285, lng: 9.450881, alpha: 1, region: 'Corse' }, // Corse
    { lat: 48.864716, lng: 2.349014, alpha: 1, region: 'Ile-de-France' },  // Ile-de-France
    { lat: 43.8099068, lng: 1.4344926, alpha: 1, region: 'Midi-Pyrenees' },  // Midi-Pyrénées
    { lat: 49.433333, lng: 1.083333, alpha: 1, region: 'Haute-Normandie' },  // Haute-Normandie
    { lat: 49.183333, lng: -0.350000, alpha: 1, region: 'Basse-Normandie' },  // Basse-Normandie
    { lat: 47.666667, lng: -2.750000, alpha: 1, region: 'Bretagne' },  // Bretagne
    { lat: 49.250000, lng: 4.033333, alpha: 1, region: 'Champagne-Ardenne' },  // Champagne-Ardenne
    { lat: 49.133333, lng: 6.166667, alpha: 1, region: 'Lorraine' },  // Lorraine
    { lat: 48.616667, lng: 7.500000, alpha: 1, region: 'Alsace' },  // Alsace
    { lat: 47.466667, lng: -0.550000, alpha: 1, region: 'Pays-de-la-Loire' },  // Pays-de-la-Loire
    { lat: 47.583333, lng: 1.333333, alpha: 1, region: 'Centre' },  // Centre
    { lat: 47.316667, lng: 5.016667, alpha: 1, region: 'Bourgogne' },  // Bourgogne
    { lat: 47.250000, lng: 6.033333, alpha: 1, region: 'Franche-conté' },  // Franche-conte
    { lat: 46.316667, lng: -0.466667, alpha: 1, region: 'Poitou-Charrentes' },  // Poitou-Charrentes
    { lat: 45.850000, lng: 1.250000, alpha: 1, region: 'Limousin' },  // Limousin
    { lat: 45.777222, lng: 3.087025, alpha: 1, region: 'Auvergne' },  // Auvergne
    { lat: 44.836151, lng: -0.580816, alpha: 1, region: 'Aquitaine' },  // Aquitaine
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectMarker(marker, $event) {
    this.router.navigate(['/maids', marker.region]);
  }

  openInfo(infoWindow, $event) {
    infoWindow.open();
  }

  closeInfo(infoWindow, $event) {
    infoWindow.close();
  }
}
