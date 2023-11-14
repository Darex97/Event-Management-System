import { Component } from '@angular/core';
import { ExampleHeader } from '../signup/exampleHeader';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { EventClass } from 'src/app/classes/eventClass';
import { User } from 'src/app/classes/user';
import { UserEventConection } from 'src/app/classes/userEventConection';
import { UserEventService } from 'src/app/services/user-event.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent {
  
  exampleHeader = ExampleHeader;

  public user: User = new User("", "", "", "", "", "", "", "", "");
  public userEvents?: EventClass[] = [];
  public userEventConections?: UserEventConection[] = []


  constructor(private eventService: EventServiceService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private userEventConectionService: UserEventService,
    private userServie: UserService,
                                     ) { }

  ngOnInit(): void {

    this.userServie.getUsersEvents(Number(this.localStorageService.get("id"))).subscribe((userData: any) => {
      this.user = userData[0];
      console.log(this.user)
      this.userEvents = this.user.createdEvents;
    })

    this.userEventConectionService.getUserRegistratedEvents(Number(this.localStorageService.get("id"))).subscribe((conectionData:any)=>{
      this.userEventConections = conectionData;
      console.log(this.userEventConections);
    })



  }

  onChangeName(event:any){
    this.user.username = (event.target as HTMLInputElement).value;
    console.log(this.user.username)
  }
  onChangeLastName(event:any){
    this.user.lastName = (event.target as HTMLInputElement).value;
    console.log(this.user.lastName)

  }
  onChangeGender(event:any){
    this.user.gender = event.value;
    console.log(this.user.gender)

  }
  // onChangeDate(event:any){
  //   this.user.birthDay = String(event.value);
  //   console.log(this.user.birthDay)

  // }
  onChangeEmail(event:any){
    this.user.email = (event.target as HTMLInputElement).value;
    console.log(this.user.email)

  }
  onChangeCity(event:any){
    this.user.city = (event.target as HTMLInputElement).value;
    console.log(this.user.city)

  }
  onChangeUrl(imageSrc: string) {
    this.user.picturePath = imageSrc; 
    // this.eventForChange.picturePath = (document.querySelector(".urlInputTxt") as HTMLInputElement).value;
     console.log(this.user.picturePath)
    // //this.event.picturePath;
  }
  onChangeUser(){
    this.userServie.putUserForChange(this.user).subscribe();
  }
  

}
