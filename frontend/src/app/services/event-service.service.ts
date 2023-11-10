import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventClass } from '../classes/eventClass';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  public selectedCategory:string = "All";

  constructor(public httpClient: HttpClient) { }

  getEventsUnauth(){
    return this.httpClient.get("https://localhost:7057/Event/GetAllEvents")
   }

  setCategory(category:string){
    this.selectedCategory=category;
  }
  getCategory(){
    return this.selectedCategory;
  }
  eventAlredyExist(name:string){ /////ZA REGISTRACIJU  
    return this.httpClient.get("https://localhost:7057/Event/GetEvent/"+name);
  }
  postEvent(event : EventClass,idCreator:number ){
    console.log(event,idCreator);
    return   this.httpClient.post("https://localhost:7057/Event/AddEvent/"+event.name+"/"+event.date+"/"+event.time+"/"+event.place+"/"+event.price+"/"+event.language+"/"+event.categories+"/"+event.longDescribe+"/"+event.shortDescribe+"/"+event.picturePath+"/"+idCreator,event)
   }
}
