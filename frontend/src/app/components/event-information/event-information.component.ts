import { UserEventService } from 'src/app/services/user-event.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { ExampleHeader } from '../signup/exampleHeader';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { UserEventConection } from 'src/app/classes/userEventConection';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-event-information',
  templateUrl: './event-information.component.html',
  styleUrls: ['./event-information.component.scss']
})


export class EventInformationComponent {

  exampleHeader = ExampleHeader;
  
  public eventForShow:EventClass = new EventClass("","","","","","","","",""); 
  public eventName:string="";
  public dateForShow:Date= new Date();
  //public users:User [] = [];
  public eventUserConection: UserEventConection[]=[];
 
  

  constructor(private eventService:EventServiceService,
      private route: ActivatedRoute,
      private localStorageService:LocalStorageService,
      private router: Router,
      private userEventService:UserEventService
    ) { }

  ngOnInit(): void {

    // this.eventService.eventAlredyExist("Novi").subscribe((eventData:any)=>{
    //   this.eventForShow = eventData[0];
    //   console.log(this.eventForShow)
    // });

    this.eventName = this.route.snapshot.queryParamMap.get('eventName') || "";

    this.eventService.eventAlredyExist(this.eventName).subscribe((eventData:any)=>{
      this.eventForShow=eventData[0];
      this.dateForShow =new Date(this.eventForShow.date)
     // console.log(this.eventForShow)
    })

    this.userEventService.getRegistratedUsersForEvent(this.eventName).subscribe((conectionsData:any)=>{
      this.eventUserConection = conectionsData;
      //this.users = this.eventUserConection.registratedUser ;
      console.log(this.eventUserConection)
    })
   
   
   

  }

  register(){
    const checkifThereisToken = this.localStorageService.get("token")
    if(checkifThereisToken == null){   
       this.router.navigate(['login']); }
       else{
        let userId:number = Number(this.localStorageService.get("id"));
     
        this.eventService.registerForEvent(userId,Number(this.eventForShow.id)).subscribe();
       }
      
  }
  

}
