import { EventClass } from "./eventClass";
import { User } from "./user";

export class Category {

    
    id: number;
    type: string;
   
    

    constructor(      
        Id: number,
        Type: string   
    ) 
    {        
        this.id=Id;
        this.type=Type;
    }
}