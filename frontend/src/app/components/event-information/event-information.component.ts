import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';
import { EventServiceService } from 'src/app/services/event-service.service';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { ExampleHeader } from '../signup/exampleHeader';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-information',
  templateUrl: './event-information.component.html',
  styleUrls: ['./event-information.component.scss']
})


export class EventInformationComponent {

  
  public eventForShow:EventClass = new EventClass("","","","","","","","","");
  exampleHeader = ExampleHeader;
  public eventName:string="";
  

  

  constructor( private route: ActivatedRoute,
    private eventService:EventServiceService) { 
      
    }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.eventName = params.get('eventName') || "";
    })
    

    this.eventService.eventAlredyExist(this.eventName).subscribe((eventData:any)=>{
      this.eventForShow=eventData;
      console.log(this.eventForShow)
    })
    
  }

  
  

}
