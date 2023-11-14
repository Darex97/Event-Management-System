import { EventClass } from "./eventClass";

export class User {

    
    firstName: string;
    lastName: string;
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
        LastName: string,    
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
        this.lastName=LastName;
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