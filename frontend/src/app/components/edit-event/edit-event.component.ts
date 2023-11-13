import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { ExampleHeader } from '../signup/exampleHeader';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {


  @Output() closePopup = new EventEmitter();
  @Input() eventForChange:EventClass = new EventClass("","","","","","","","","","");
  public timeHours: string[] = [];
  public timeMinuts: string[] = [];
  public hour:string="0";
  public minut:string="0";
  public splitedTime:string []=[];
  exampleHeader = ExampleHeader;

  

  constructor(private eventService: EventServiceService,
    private localStorageService: LocalStorageService) { 
      this.addMinutes()
    }

  ngOnInit(): void {
    console.log(this.eventForChange)
    this.splitedTime= this.eventForChange.time.split(":",2);
    this.hour=this.splitedTime[0];
    this.minut=this.splitedTime[1];
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
    this.eventForChange.name = (event.target as HTMLInputElement).value;
  }
  onChangePlace(event: Event) {
    this.eventForChange.place = (event.target as HTMLInputElement).value;
  }
  onChangePrice(event: Event) {
    this.eventForChange.price = (event.target as HTMLInputElement).value;
  }
  onChangeDescribe(event: Event) {
    this.eventForChange.longDescribe = (event.target as HTMLInputElement).value;
  }
  onChangeDescibeShort(event: Event) {
    this.eventForChange.shortDescribe = (event.target as HTMLInputElement).value;
  }
  onChangeUrl() {
    
    this.eventForChange.picturePath = (document.querySelector(".urlInputTxt") as HTMLInputElement).value;
    console.log(this.eventForChange.picturePath)
    //this.event.picturePath;
  }
 
  onChangeHour(event: any) {
    this.hour = event.value;
    this.eventForChange.time = this.hour+":"+this.minut;
    console.log(this.eventForChange.time)
  }
  onChangeMinutes(event: any) {
    this.minut = event.value;
    this.eventForChange.time = this.hour+":"+this.minut;
    console.log(this.eventForChange.time)
  }
  onChangeCategory(event: any) {
    this.eventForChange.categories = event.value;
    //console.log( event.value)
  }
  onChangeLanguage(event: any) {
    this.eventForChange.language = event.value;
    //console.log( event.value)
  }
  onChangeDate(event: any) {
    this.eventForChange.date = String(event.value);

    
    //this.event.date = event.value.format("MM--DD--YYYY");
    //console.log(event.value)
    
  }

  close(){
    this.closePopup.emit();
   }

   onChangeEvent(){

        this.eventService.changeEvent(this.eventForChange).subscribe();

      
     
   
   }
}