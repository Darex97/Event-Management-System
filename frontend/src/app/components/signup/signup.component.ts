import { UserService } from './../../services/user.service';
import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { ExampleHeader } from './exampleHeader';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  exampleHeader = ExampleHeader;
  hide = true;
  registerForm!: FormGroup;
  submitted = false;

  public user:User = new User("","","","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsqHlF8M_vZxj2QEV5CdeLqLzdprFXj8q_eIKFr3Aj4lpQhf0CESalnCLrH9O02OcN68&usqp=CAU","","","","","");

  constructor(private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService) { }

    ngOnInit() {
      
      this.registerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        date: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,this.customValidator.patternValidator()]],
       
       
    })
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
    

onChangeFirstName(event : Event){
   this.user.firstName = (event.target as HTMLInputElement).value;
  }
onChangeLastName(event : Event){
   this.user.lastName = (event.target as HTMLInputElement).value;
  }
onChangeGender(event:MatSelectChange){
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
  this.submitted = true;
  if (this.registerForm.valid){
  this.userService.userAlredyExist(this.user.username).subscribe((ifExist:any)=>{
       console.log(ifExist)
    if(ifExist.length==0){ // ovaj niz uvek ima samo 1 clana ako postoji takav korisnik
      this.userService.postUser(this.user).subscribe();
      this.router.navigate(['pocetna']);  
     } 
     else{
      alert("User exist!")
     }
   });
  } 
  }
}


