import { EventServiceService } from './../../services/event-service.service';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventClass } from 'src/app/classes/eventClass';
import { LocalStorageService } from 'src/app/services/localStorage.services';

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
  public idUser:string | null ="";

  constructor(private viewportScroller: ViewportScroller,
    private eventService:EventServiceService,
    private localStorage:LocalStorageService,
    private router: Router) {} 

  ngOnInit(): void {

    this.idUser = this.localStorage.get("id");
    if(this.idUser!=null){
      this.router.navigate(['korisnikPocetna']); 
    }

    this.eventService.getEventsUnauth().subscribe((eventData: any) => {

      this.events = eventData.slice(0,6);
      
    })

  }

  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  onOpenEventInfo(eventName:string){
    this.router.navigate(['/eventsList/eventInformation'],{queryParams: {eventName: eventName}})

  }

  public onClickSeeALl(){
    
  };

}
