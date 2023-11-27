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
import { MatSelectChange } from '@angular/material/select';

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
  public review:boolean = false;
  public eventForReview!:EventClass;
  public spinner:boolean=false;



  constructor(private eventService: EventServiceService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private userEventConectionService: UserEventService,
    private userServie: UserService
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

  onChangeName(event:KeyboardEvent){
    this.user.username = (event.target as HTMLInputElement).value;
    console.log(this.user.username)
  }
  onChangeLastName(event:KeyboardEvent){
    this.user.lastName = (event.target as HTMLInputElement).value;
    console.log(this.user.lastName)

  }
  onChangeGender(event:MatSelectChange){
    this.user.gender = event.value;
    console.log(this.user.gender)

  }
  // onChangeDate(event:any){
  //   this.user.birthDay = String(event.value);
  //   console.log(this.user.birthDay)

  // }
  onChangeEmail(event:KeyboardEvent){
    this.user.email = (event.target as HTMLInputElement).value;
    console.log(this.user.email)

  }
  onChangeCity(event:KeyboardEvent){
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
    this.spinner=true;

    this.userServie.putUserForChangeFromBody(this.user).subscribe();
    setTimeout(() => {
      this.spinner=false;
  }, 500);
  }
  onAddReview(event:EventClass){
    console.log(event)
    this.eventForReview = event;
    this.review=true;
  }
  close() {
    this.review = false;
  }
  

}
