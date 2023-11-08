import { UserService } from './../../services/user.service';
import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { ExampleHeader } from './exampleHeader';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  exampleHeader = ExampleHeader;
  hide = true;

  public user:User = new User("","","M","","","","","","");

  constructor(private userService: UserService,private router: Router) { }

onChangeFirstName(event : Event){
   this.user.firstName = (event.target as HTMLInputElement).value;
  }
onChangeLastName(event : Event){
   this.user.lastNAme = (event.target as HTMLInputElement).value;
  }
onChangeGender(event:any){
   this.user.gender = event.value;
   //console.log( event.value)
  }
onChangeDate(event: any){
   this.user.birthDay = event.value;
   //console.log(event.value)
  }
onChangeUsername(event : Event){
   this.user.username = (event.target as HTMLInputElement).value;
  }
onChangeEmail(event : Event){
   this.user.email = (event.target as HTMLInputElement).value;
  }
onChangePassword(event : Event){
   this.user.password = (event.target as HTMLInputElement).value;
  }
onSignup(){
  this.userService.userAlredyExist(this.user.username).subscribe((ifExist:any)=>{
       console.log(ifExist)
    if(ifExist.length==0){ // ovaj niz uvek ima samo 1 clana ako postoji takav korisnik
      this.userService.postUser(this.user).subscribe();
      this.router.navigate(['pocetna']);  
     } 
     else{
      alert("User exist or invalid!")
     }
   });}
}


