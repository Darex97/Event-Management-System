import { MatDateFormats } from '@angular/material/core';
import { Component } from '@angular/core';
import { ExampleHeader } from '../signup/exampleHeader';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { MatSelectChange } from '@angular/material/select';
import { Category } from 'src/app/classes/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  exampleHeader = ExampleHeader;
  registerForm!: FormGroup;
  submitted = false;
  

  public timeHours: string[] = [];
  public timeMinuts: string[] = [];
  public event: EventClass = new EventClass("", "", "", "", "", "", "", "", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  public hour:string="0";
  public minut:string="0";
  public categories:Category[] = [];
  public spinner:boolean=false;

  constructor(private eventService: EventServiceService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder) {
    this.addMinutes()
  }

  ngOnInit(): void {
    /////////////kategorije
    this.eventService.getAllCategories().subscribe((categoryData:any) =>{
      this.categories = categoryData;
      console.log(this.categories);
    })
    //////////////
    this.registerForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventHour: ['', Validators.required],
      eventMinut: ['', Validators.required],
      eventCity: ['', Validators.required],
      eventCategory: ['', Validators.required],
      eventLanguage: ['', Validators.required],
      eventPrice: ['', Validators.required],
      eventDesL: ['', Validators.required],
      eventDesS: ['', Validators.required],
      eventURl: ['', Validators.required],
      // email: ['', [Validators.required,Validators.email]],
      // password: ['', [Validators.required]],
     
     
  })
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
    

  addMinutes() {
    for (let i = 0; i < 60; i++) {
      if (i < 24) {
        if(i<10){
          this.timeHours.push("0"+String(i));
        }
        else{
          this.timeHours.push(String(i));

        }
      }
      if(i<10){
        this.timeMinuts.push("0"+String(i));

      }else{
        this.timeMinuts.push(String(i));

      }
    }
  }

  onChangeName(event: Event) {
    this.event.name = (event.target as HTMLInputElement).value;
  }
  onChangePlace(event: Event) {
    this.event.place = (event.target as HTMLInputElement).value;
  }
  onChangePrice(event: Event) {
    this.event.price = (event.target as HTMLInputElement).value;
  }
  onChangeDescribe(event: Event) {
    this.event.longDescribe = (event.target as HTMLInputElement).value;
  }
  onChangeDescibeShort(event: KeyboardEvent) {
    this.event.shortDescribe = (event.target as HTMLInputElement).value;
  }
  onChangeUrl(imageSrc: string) {
    this.event.picturePath = imageSrc; 
    // this.event.picturePath = (document.querySelector(".urlInputTxt") as HTMLInputElement).value;
    console.log(this.event.picturePath)
    //this.event.picturePath;
  }
 
  onChangeHour(event: MatSelectChange) {
    this.hour = event.value;
    this.event.time = this.hour+":"+this.minut;
    console.log(this.event.time)
  }
  onChangeMinutes(event: MatSelectChange) {
    this.minut = event.value;
    this.event.time = this.hour+":"+this.minut;
    console.log(this.event.time)
  }
  onChangeCategory(event: MatSelectChange) {
    let id:number = Number(event.value);
    let category = this.categories.find((obj:Category)=>{
      return obj.id === id;
    })
    this.event.categories = category;
    console.log( this.event.categories)
  }
  onChangeLanguage(event: MatSelectChange) {
    this.event.language = event.value;
    //console.log( event.value)
  }
  onChangeDate(event: any) {
    this.event.date = String(event.value);

    
    //this.event.date = event.value.format("MM--DD--YYYY");
    //console.log(event.value)
    
  }

  onCreate() {
    this.submitted = true;
  if (this.registerForm.valid){
    this.spinner=true;
    console.log(this.event,Number(this.localStorageService.get("id")));
    this.eventService.eventAlredyExist(this.event.name).subscribe((ifExist: any) => {
      //console.log(ifExist)
      if (ifExist.length == 0) { // ovaj niz uvek ima samo 1 clana ako postoji takav korisnik
        
        this.eventService.postEvent(this.event, Number(this.localStorageService.get("id"))).subscribe();
        setTimeout(() => {
          this.spinner=false;
          this.router.navigate(['eventsList']);
      }, 500);
        
      }
      else {
        alert("Event exist or invalid!")
      }
    });
  }
}

}
