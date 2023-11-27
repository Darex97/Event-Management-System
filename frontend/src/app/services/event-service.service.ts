import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventClass } from '../classes/eventClass';
import { environment } from 'src/environments/environment';
import { Review } from '../classes/review';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {



  public selectedCategory:string = "All";
 // public eventForShow:EventClass = new EventClass("","","","","","","","","");



  constructor(public httpClient: HttpClient) { }

  // setEventForShow(name:string){
  //   this.eventAlredyExist(name).subscribe((eventData:any)=>{
  //     this.eventForShow=eventData;
  //     console.log(this.eventForShow)
  //   });

  // }
  // getEventForShow(){
  //   return this.eventForShow;
  // }

  /////////////////
   getEventsUnauth(){
     return this.httpClient.get(environment.apiUrl+"Event/GetAllEvents")
   }
   getAllCategories(){
    return this.httpClient.get(environment.apiUrl+"Event/GetAllCategories")
  }

  setCategory(category:string){
    this.selectedCategory=category;
  }
  getCategory(){
    return this.selectedCategory;
  }
  eventAlredyExist(name:string){ /////ZA REGISTRACIJU  
    return this.httpClient.get(environment.apiUrl+"Event/GetEvent/"+name);
  }
  getEventUnathorized(name:string){ /////ZA REGISTRACIJU  
    return this.httpClient.get(environment.apiUrl+"Event/GetEventUnathorized/"+name);
  }
  // postEvent(event : EventClass,idCreator:number ){
  //   console.log(event,idCreator);
  //   return   this.httpClient.post("https://localhost:7057/Event/AddEvent/"+event.name+"/"+event.date+"/"+event.time+"/"+event.place+"/"+event.price+"/"+event.language+"/"+event.categories+"/"+event.longDescribe+"/"+event.shortDescribe+"/"+event.picturePath+"/"+idCreator,event)
  //  }
  postEvent(event : EventClass,idCreator:number ){
    //console.log(event,idCreator);
    return   this.httpClient.post(environment.apiUrl+"Event/AddEvent/"+idCreator,event)
   }
  changeEvent(event : EventClass ){
    //console.log(event,idCreator);
    return   this.httpClient.put(environment.apiUrl+"Event/ChangeEventUser",event)
   }
   registerForEvent(userId:number,eventId?:number){
    return   this.httpClient.put(environment.apiUrl+"Event/RegisterForEvent/"+eventId+"/"+userId,eventId)
   }
   deleteEvent(eventId?:number){
    return   this.httpClient.delete(environment.apiUrl+"Event/DeleteEvent/"+eventId)
   }
   addReview(comment:string, rating:number,eventId?:number){
    return   this.httpClient.post(environment.apiUrl+"Event/AddReview/"+eventId+"/"+comment+"/"+rating,eventId)
   }
   addReviewBody(rev:Review){
    //console.log(rev)
    return   this.httpClient.post(environment.apiUrl+"Event/AddReviewBody",rev)
   }
}
