import { HttpClient } from '@angular/common/http';
import { Component, Input, signal } from '@angular/core';
import * as Leaflet from 'leaflet';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  title = 'AngularOSM';
  //https://nominatim.openstreetmap.org/search?q=Vranje&format=json

  lat?:number=0;
  lon?:number=0;
  loading = signal(true);

  @Input() nameCity:string= "";
  options?: Leaflet.MapOptions;
  // options: Leaflet.MapOptions = {
  //   layers: getLayers(Number(this.lat),Number(this.lon)),
  //   zoom: 6,
  //   center: new Leaflet.LatLng(44.8178131, 20.4568974)
  // };


  constructor(private mapService: MapService) {
    
  }

  ngOnInit(): void {
    console.log(this.nameCity)

    this.mapService.nameToLatLon(this.nameCity).subscribe((data:any) => {
      this.lat=data[0].lat;
      this.lon = data[0].lon;
      this.options={
        layers: getLayers(Number(this.lat),Number(this.lon)),
        zoom: 8,
        center: new Leaflet.LatLng(Number(this.lat),Number(this.lon))
      }
      console.log(data[0]);
      this.loading.set(false);
    })
    // 
  }
  
  isLoading() {
    return this.loading();
  }
 

  
}

export const getLayers = (leti:number,long:number): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    // Pastel style, remove if you want basic style.
    // new Leaflet.TileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key={your_key}', {
    //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    // } as Leaflet.TileLayerOptions),
    ...getMarkers(leti,long)
  ] as Leaflet.Layer[];
};

export const getMarkers = (leti:number,long:number): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(leti,long), {
      icon: new Leaflet.Icon({
        iconSize: [30, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker.png',
      }),
      title: 'Place'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};