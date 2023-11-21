import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) { }


  nameToLatLon(name:string){
    return this.httpClient.get('https://nominatim.openstreetmap.org/search?q='+name+'&format=json')
  }
}
