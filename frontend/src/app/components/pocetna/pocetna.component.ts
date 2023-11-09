import { EventServiceService } from './../../services/event-service.service';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { EventClass } from 'src/app/classes/eventClass';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public events: EventClass[] = [];

  constructor(private viewportScroller: ViewportScroller,
    private eventService:EventServiceService) {} 

  ngOnInit(): void {

    this.eventService.getEventsUnauth().subscribe((eventData: any) => {

      this.events = eventData;
      console.log(this.events);
    })

  }

  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  public onClickSeeALl(){
    
  };

}
