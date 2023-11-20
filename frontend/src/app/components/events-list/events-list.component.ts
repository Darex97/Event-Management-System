import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { EventClass } from 'src/app/classes/eventClass';
import { User } from 'src/app/classes/user';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  //public categorySelect:Category=new Category(0,"All")
  public events: EventClass[] = [];
  public selectedLocation:string = "All";
  public allLocations:string [] = [];
  public selectedCategory:string = "All";
  public selectedLanguage:string = "All";
  public selectedPaid:number = 0;
  public checkifThereisToken:string | null = ""
  public idUser:string | null ="";
  public eventInformationPopup:boolean=false;
  public eventForPopup:EventClass = new EventClass("","","","","","","","","");
  public user:User = new User("","","","","","","","","");
  public userEvents?: EventClass[] = [];
  public categories:Category[] = [];
  public selectedPriceFlag:boolean = false;

  //query params
  // public events$: Observable<EventClass[]>;
  // selectedId: number=0;
  // events = EVENTS;
  
  //
 

  constructor( private eventService:EventServiceService,
     private localStorageService:LocalStorageService,
     private router: Router,
     private route: ActivatedRoute) {} 

  ngOnInit(): void {
    

     this.eventService.getEventsUnauth().subscribe((eventData: any) => {

      this.events = eventData;
      console.log(this.events);

      this.events.forEach(element => {
        
        this.allLocations.push(element.place);
      });

/////////////kategorije
      this.eventService.getAllCategories().subscribe((categoryData:any) =>{
        this.categories = categoryData
      },
      (error)=>{},
      ()=>{
             //query params
    this.route.queryParamMap.subscribe(params=>{
      this.selectedCategory = params.get('selectedCategory') || "All";
      // this.categorySelect = this.categories.find((obj:Category)=>{
      //   return obj.type === this.selectedCategory;
      // }) || new Category(0,"All")
      this.selectedLocation = params.get('selectedLocation') || "All";
      this.selectedLanguage = params.get('selectedLanguage') || "All";
      this.selectedPriceFlag ="true"==params.get('selectedPriceFlag') || false;
    })
    
    //
      })
      //////////////


   

      // this.userServie.getUsersEvents(Number(this.localStorageService.get("id"))).subscribe((userData: any) =>{
      //   this.user = userData[0];
      //   console.log(this.user);
      //   this.userEvents=this.user.createdEvents;
      // //   this.user.createdEvents?.forEach(event => {
      // //   this.userEvents.push(event);
      // this.user.createdEvents?.forEach(event =>{
      //   console.log(this.userEvents?.includes(event))
      // })
      //    console.log( this.userEvents)
      // // })
        
      // })

      this.allLocations = this.allLocations.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
    
  })

    this.selectedCategory=this.eventService.getCategory();

    this.idUser = this.localStorageService.get("id");

  }
  // close(){
  //   this.eventInformationPopup=false;
  // }
  // openEvent(event:EventClass){
  //   this.eventForPopup = event;
  //   this.eventInformationPopup=true;
  // }

  onLocationChange(ob:MatSelectChange){
    this.selectedLocation=ob.value;
    
    this.router.navigate(['/eventsList'],{queryParams: {selectedLocation: this.selectedLocation, selectedCategory: this.selectedCategory, selectedLanguage: this.selectedLanguage, selectedPriceFlag: this.selectedPriceFlag  }})
    //console.log(this.selectedLocation);
  }
  onCategoryChange(ob:MatSelectChange){
    this.selectedCategory=ob.value;
    
    this.router.navigate(['/eventsList'],{queryParams: {selectedLocation: this.selectedLocation, selectedCategory: this.selectedCategory, selectedLanguage: this.selectedLanguage, selectedPriceFlag: this.selectedPriceFlag  }})
    console.log(this.selectedCategory);
  }
  onLanguageChange(ob:MatSelectChange){
    this.selectedLanguage=ob.value;
    this.router.navigate(['/eventsList'],{queryParams: {selectedLocation: this.selectedLocation, selectedCategory: this.selectedCategory, selectedLanguage: this.selectedLanguage, selectedPriceFlag: this.selectedPriceFlag  }})

    //console.log(this.selectedLanguage);
  }
  onChangePaid(){
    this.selectedPriceFlag = !this.selectedPriceFlag;
    this.router.navigate(['/eventsList'],{queryParams: {selectedLocation: this.selectedLocation, selectedCategory: this.selectedCategory, selectedLanguage: this.selectedLanguage, selectedPriceFlag: this.selectedPriceFlag  }})

    console.log(this.selectedPriceFlag);
  }
  onRegister(){
    this.checkifThereisToken = this.localStorageService.get("token")
    if(this.checkifThereisToken == null){   
       this.router.navigate(['login']); }
    // }else{
    //   const userId:number = Number(this.localStorageService.get("token"));
    //   this.eventService.registerForEvent(userId,eventId).subscribe();
    // }
  }
  onOpenEventInfo(eventName:string){
    this.router.navigate(['/eventsList/eventInformation'],{queryParams: {eventName: eventName}})

  }
  onSortChange(ob:MatSelectChange){
    if(ob.value == "up"){
      this.events.sort((e1,e2) => Number(e1.price) - Number(e2.price))

    }
    if(ob.value == "down"){
      this.events.sort((e1,e2) => Number(e1.price) - Number(e2.price)).reverse()

    }
  }
  // uniqueNumbers = this.allLocations.filter(function(value, index, array) {
  //   return array.indexOf(value) === index;
  // });


  
}
