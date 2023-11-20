import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent {
  
  @Output() closePopup = new EventEmitter();
  @Input() eventId?:number;
  public selectedRating:number = 0;
  public comment:string = "";

  constructor(private eventService: EventServiceService  ) { }


  close(){
    this.closePopup.emit();
   }
 
 
  //   posalji(){
  //    window.location.reload();
  //    alert("Uspešno ste poslali poruku.")
  //  }
   onRatingChange(ob:MatSelectChange){
    this.selectedRating=ob.value;
  }
  onCommentChange(event : Event){
    this.comment = (event.target as HTMLInputElement).value;
  }
  onAddReview(){
    console.log(this.eventId);
    this.eventService.addReview(this.comment,this.selectedRating,this.eventId).subscribe();
    alert("Review Successful.")
    this.close();
  }
}
