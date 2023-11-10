import { User } from "./user";

export class EventClass {
        name: string;      
        date: string;
        time: string;
        place: string;
        price:string;
        language:string;
        categories: string;
        longDescribe: string;
        shortDescribe: string;
        picturePath: string;
        creator?: User;

    constructor(

        Name: string,      
        Date: string,
        Time: string,
        Place: string,
        Price:string,
        Language:string,
        Categories: string,
        LongDescribe: string,
        ShortDescribe: string,
        PicturePath: string,
        Creator?:User

    ) 
    {
        this.name=Name;
        this.date = Date;
        this.time=Time;
        this.place = Place;
        this.price = Price;
        this.language = Language;
        this.categories = Categories;
        this.longDescribe = LongDescribe;
        this.shortDescribe=ShortDescribe;
        this.picturePath=PicturePath;
        this.creator = Creator;

    }
}