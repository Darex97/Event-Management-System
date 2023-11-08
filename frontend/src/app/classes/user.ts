import { EventClass } from "./eventClass";

export class User {

    
    firstName: string;
    lastNAme: string;
    birthDay: string;
    email: string;
    city: string;
    username: string;
    password: string;
    gender: string;
    picturePath: string;
    id?:number
    createdEvents?: EventClass [];

    constructor(

        
        FirstName: string,
        LastNAme: string,    
        Gender: string,   
        PicturePath: string,
        Birthday: string,
        City: string, 
        Username: string,

        Email: string,     
        
        Password: string,
        Id?:number,
        
        
              
        
        CreatedEvents?: EventClass []

    ) 
    {
        
        this.firstName=FirstName;
        this.lastNAme=LastNAme;
        this.birthDay=Birthday;
        this.email=Email;
        this.city=City;
        this.username=Username;
        this.password=Password;
        this.gender=Gender;
        this.picturePath=PicturePath;
        this.id=Id;
        this.createdEvents=CreatedEvents;

    }
}