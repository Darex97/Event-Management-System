import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  public events: EventClass[] = [];
  public selectedLocation:string = "All";
  public selectedCategory:string = "All";
  public selectedLanguage:string = "All";
  public selectedPaid:number = 0;
  public checkifThereisToken:string | null = ""

 

  constructor( private eventService:EventServiceService,
     private localStorageService:LocalStorageService,
     private router: Router) {} 

  ngOnInit(): void {

    this.eventService.getEventsUnauth().subscribe((eventData: any) => {

      this.events = eventData;
      console.log(this.events);
    })

    

  }

  onLocationChange(ob:any){
    this.selectedLocation=ob.value;
    //console.log(this.selectedLocation);
  }
  onCategoryChange(ob:any){
    this.selectedCategory=ob.value;
    //console.log(this.selectedLocation);
  }
  onLanguageChange(ob:any){
    this.selectedLanguage=ob.value;
    //console.log(this.selectedLanguage);
  }
  onChangePaid(ob:any){
    this.selectedPaid=ob.value;
    //console.log(this.selectedPaid);
  }
  onRegister(){
    this.checkifThereisToken = this.localStorageService.get("token")
    if(this.checkifThereisToken == null){   
       this.router.navigate(['login']); 
    }
    

  }


  
}
