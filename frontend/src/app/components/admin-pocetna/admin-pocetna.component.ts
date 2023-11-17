import { Component } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';
import { User } from 'src/app/classes/user';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-pocetna',
  templateUrl: './admin-pocetna.component.html',
  styleUrls: ['./admin-pocetna.component.scss']
})
export class AdminPocetnaComponent {

    users:User [] = []; 
    eventsForShow:EventClass [] = [];

    constructor(private eventService: EventServiceService,
      private userService: UserService) {  }
  
    ngOnInit(): void {
    
      this.eventService.getEventsUnauth().subscribe((data:any)=>{
        this.eventsForShow=data;
        console.log(this.eventsForShow)
      })

      this.userService.getUsersAuth().subscribe((data:any)=>{
        this.users=data;
        console.log(this.users)
      })
     
  
    }

    
}
