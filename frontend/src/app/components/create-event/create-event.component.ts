import { MatDateFormats } from '@angular/material/core';
import { Component } from '@angular/core';
import { ExampleHeader } from '../signup/exampleHeader';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.services';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  exampleHeader = ExampleHeader;

  public timeHours: string[] = [];
  public timeMinuts: string[] = [];
  public event: EventClass = new EventClass("", "", "", "", "", "", "", "", "", "");
  public hour:string="0";
  public minut:string="0";

  constructor(private eventService: EventServiceService,
    private router: Router,
    private localStorageService: LocalStorageService) {
    this.addMinutes()
  }

  ngOnInit(): void {

  }

  addMinutes() {
    for (let i = 0; i < 60; i++) {
      if (i < 24) {
        this.timeHours.push(String(i));
      }
      this.timeMinuts.push(String(i));
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
  onChangeDescibeShort(event: Event) {
    this.event.shortDescribe = (event.target as HTMLInputElement).value;
  }
  onChangeUrl() {
    this.event.picturePath;
  }
  onChangeHour(event: any) {
    this.hour = event.value;
    this.event.time = this.hour+":"+this.minut;
    console.log(this.event.time)
  }
  onChangeMinutes(event: any) {
    this.minut = event.value;
    this.event.time = this.hour+":"+this.minut;
    console.log(this.event.time)
  }
  onChangeCategory(event: any) {
    this.event.categories = event.value;
    //console.log( event.value)
  }
  onChangeLanguage(event: any) {
    this.event.language = event.value;
    //console.log( event.value)
  }
  onChangeDate(event: any) {
    this.event.date = String(event.value);
    //this.event.date = event.value.format("MM--DD--YYYY");
    console.log(event.value)
  }

  onCreate() {

    console.log(this.event,Number(this.localStorageService.get("id")));
    this.eventService.eventAlredyExist(this.event.name).subscribe((ifExist: any) => {
      console.log(ifExist)
      if (ifExist.length == 0) { // ovaj niz uvek ima samo 1 clana ako postoji takav korisnik
        
        this.eventService.postEvent(this.event, Number(this.localStorageService.get("id"))).subscribe();
        //this.router.navigate(['pocetna']);
      }
      else {
        alert("Event exist or invalid!")
      }
    });
  }

}
