import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(public httpClient: HttpClient) { }

  getEventsUnauth(){
    return this.httpClient.get("https://localhost:7057/Event/GetAllEvents")
   }
}
