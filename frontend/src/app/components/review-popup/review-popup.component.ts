import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { EventClass } from 'src/app/classes/eventClass';
import { Review } from 'src/app/classes/review';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent {
  
  @Output() closePopup = new EventEmitter();
  @Input() eventRev!:EventClass;
  public selectedRating:number = 0;
  public comment:string = "";
  public rev:Review = new Review("",0, new EventClass("","","","","","","","","")) ;

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
    this.rev.rating = ob.value;
    
  }
  onCommentChange(event : Event){
    this.comment = (event.target as HTMLInputElement).value;
    this.rev.comment = (event.target as HTMLInputElement).value;
  }
  onAddReview(){
    console.log(this.eventRev)
    console.log(this.eventRev.id);
    this.rev.forWhatEvent=this.eventRev;
    console.log(this.rev)
    // this.eventService.addReview(this.comment,this.selectedRating,this.eventRev?.id).subscribe();
    this.eventService.addReviewBody(this.rev).subscribe();

    alert("Review Successful.")
    this.close();
  }
}
