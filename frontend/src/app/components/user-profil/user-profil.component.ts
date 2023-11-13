import { Component } from '@angular/core';
import { ExampleHeader } from '../signup/exampleHeader';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { EventClass } from 'src/app/classes/eventClass';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  exampleHeader = ExampleHeader;

  public user:User = new User("","","","","","","","","");
  public userEvents?: EventClass[] = [];


  constructor( private eventService:EventServiceService,
    private localStorageService:LocalStorageService,
    private router: Router,
    private userServie:UserService) {} 

 ngOnInit(): void {

     this.userServie.getUsersEvents(Number(this.localStorageService.get("id"))).subscribe((userData: any) =>{
       this.user = userData[0];
       console.log(userData)
       this.userEvents=this.user.createdEvents;
     })



 }

}
