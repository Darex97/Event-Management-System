import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { ExampleHeader } from '../signup/exampleHeader';
import { MatSelectChange } from '@angular/material/select';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {


  @Output() closePopup = new EventEmitter();
  @Input() eventForChange:EventClass = new EventClass("","","","","","","","","");
  public timeHours: string[] = [];
  public timeMinuts: string[] = [];
  public hour:string="0";
  public minut:string="0";
  public splitedTime:string []=[];
  exampleHeader = ExampleHeader;
  public categories:Category[] = [];
  public chosenCategory?:string = "dddd";
  public spinner:boolean=false;




  

  constructor(private eventService: EventServiceService,
    private localStorageService: LocalStorageService) { 
      this.addMinutes()
      
      
    }

  ngOnInit(): void {
     /////////////kategorije
     this.eventService.getAllCategories().subscribe((categoryData:any) =>{
      this.categories = categoryData;
      console.log(this.categories);
      this.chosenCategory = this.eventForChange.categories?.type;
      console.log(this.chosenCategory)
    })
    //////////////
    
    

    console.log(this.eventForChange)
    this.splitedTime= this.eventForChange.time.split(":",2);
    this.hour=this.splitedTime[0];
    this.minut=this.splitedTime[1];
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
  // onChangeUrl() {
    
  //   this.eventForChange.picturePath = (document.querySelector(".urlInputTxt") as HTMLInputElement).value;
  //   console.log(this.eventForChange.picturePath)
  //   //this.event.picturePath;
  // }
  onChangeUrl(imageSrc: string) {
    this.eventForChange.picturePath = imageSrc; 
    // this.eventForChange.picturePath = (document.querySelector(".urlInputTxt") as HTMLInputElement).value;
     console.log(this.eventForChange.picturePath)
    // //this.event.picturePath;
  }
 
  onChangeHour(event: MatSelectChange) {
    this.hour = event.value;
    this.eventForChange.time = this.hour+":"+this.minut;
    console.log(this.eventForChange.time)
  }
  onChangeMinutes(event: MatSelectChange) {
    this.minut = event.value;
    this.eventForChange.time = this.hour+":"+this.minut;
    console.log(this.eventForChange.time)
  }
  onChangeCategory(event: MatSelectChange) {
    let id:number = Number(event.value);
    let category = this.categories.find((obj:Category)=>{
      return obj.id === id;
    })
    this.eventForChange.categories = category;
    console.log( this.eventForChange.categories)
  }
  onChangeLanguage(event: MatSelectChange) {
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
        this.spinner=true;
        this.eventService.changeEvent(this.eventForChange).subscribe();
        setTimeout(() => {
          this.spinner=false;
      }, 500);

      
     
   
   }
}
