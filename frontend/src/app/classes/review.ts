export class Review {

    
    id: number;
    comment: string;
    rating:number;
   
    

    constructor(      
        Id: number,
        Comment: string,
        Rating:number   
    ) 
    {        
        this.id=Id;
        this.comment=Comment;
        this.rating=Rating;
    }
}