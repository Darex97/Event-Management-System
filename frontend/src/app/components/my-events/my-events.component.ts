import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventClass } from 'src/app/classes/eventClass';
import { User } from 'src/app/classes/user';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent {


  public events: EventClass[] = [];
  public selectedLocation: string = "All";
  public allLocations: string[] = [];
  public selectedCategory: string = "All";
  public selectedLanguage: string = "All";
  public selectedPaid: number = 0;
  public checkifThereisToken: string | null = ""
  public idUser: string | null = "";
  public eventInformationPopup: boolean = false;
  public eventForPopup: EventClass = new EventClass("", "", "", "", "", "", "", "", "");
  public user: User = new User("", "", "", "", "", "", "", "", "");
  public userEvents?: EventClass[] = [];
  public twText:string = "evo sve ";


  constructor(private localStorageService: LocalStorageService,  
    private userServie: UserService,
    private eventService: EventServiceService,
    private router: Router) { }

  ngOnInit(): void {



    this.userServie.getUsersEvents(Number(this.localStorageService.get("id"))).subscribe((userData: any) => {
      this.user = userData[0];
      
      this.userEvents = this.user.createdEvents;
      console.log(this.userEvents);
    })

    //   this.allLocations = this.allLocations.filter((value, index, array) => {
    //   return array.indexOf(value) === index;
    // });



    // this.selectedCategory = this.eventService.getCategory();

     this.idUser = this.localStorageService.get("id");

  }
  close() {
    this.eventInformationPopup = false;
  }
  openEvent(event: EventClass) {
    this.eventForPopup = event;
    this.eventInformationPopup = true;
    
  }
  deleteEvent(eventId?:number){
    //let userId:number = Number(this.localStorageService.get("id"));
    this.eventService.deleteEvent(eventId).subscribe();

  }
  onOpenEventInfo(eventName:string){
    this.router.navigate(['/eventsList/eventInformation'],{queryParams: {eventName: eventName}})

  }

  // onLocationChange(ob:any){
  //   this.selectedLocation=ob.value;
  //   //console.log(this.selectedLocation);
  // }
  // onCategoryChange(ob:any){
  //   this.selectedCategory=ob.value;
  //   //console.log(this.selectedLocation);
  // }
  // onLanguageChange(ob:any){
  //   this.selectedLanguage=ob.value;
  //   //console.log(this.selectedLanguage);
  // }
  // onChangePaid(ob:any){
  //   this.selectedPaid=ob.value;
  //   //console.log(this.selectedPaid);
  // }
  // onRegister(){
  //   this.checkifThereisToken = this.localStorageService.get("token")
  //   if(this.checkifThereisToken == null){   
  //      this.router.navigate(['login']); 
  //   }
  // }

  // uniqueNumbers = this.allLocations.filter(function(value, index, array) {
  //   return array.indexOf(value) === index;
  // });




}
