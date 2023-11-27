import { EventClass } from "./eventClass";

export class Review {

    
    
    comment: string;
    rating:number;
    forWhatEvent:EventClass;
    id?: number;
   
    

    constructor(      
        
        Comment: string,
        Rating:number,
        ForWhatEvent:EventClass,
        Id?: number
    ) 
    {        
        
        this.comment=Comment;
        this.rating=Rating;
        this.forWhatEvent=ForWhatEvent;
        this.id=Id;
    }
}