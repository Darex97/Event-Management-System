import { EventClass } from "./eventClass";
import { User } from "./user";

export class UserEventConection {

    
    id: number;
    registratedUser: User;
    forWhatEvent: EventClass;
    

    constructor(      
        Id: number,
        RegistratedUser: User,    
        ForWhatEvent: EventClass 
    ) 
    {        
        this.id=Id;
        this.registratedUser=RegistratedUser;
        this.forWhatEvent=ForWhatEvent;
    }
}