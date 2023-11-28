import { Component } from '@angular/core';
import { finalize } from 'rxjs';
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
    public spinner:boolean=false;


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

    onDeleteUser(user:User,idUser?:number){
      this.spinner=true;

      const index = this.users.indexOf(user, 0);
      if (index > -1) {
        this.users.splice(index, 1);
      }

      this.userService.deleteUser(idUser).pipe(finalize(() => this.spinner = false)).subscribe();

    //   setTimeout(() => {
    //     this.spinner=false;
    // }, 500);
    }
    onDeleteEvent(oneEvent:EventClass,idEvent?:number){
      this.spinner=true;

      const index = this.eventsForShow.indexOf(oneEvent, 0);
      if (index > -1) {
        this.eventsForShow.splice(index, 1);
      }

      this.eventService.deleteEvent(idEvent).subscribe();
      setTimeout(() => {
        this.spinner=false;
    }, 500);
    } 
    
}
