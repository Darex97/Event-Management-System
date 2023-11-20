import { Category } from "./category";
import { Review } from "./review";
import { User } from "./user";

export class EventClass {
        name: string;      
        date: string;
        time: string;
        place: string;
        price:string;
        language:string;
        longDescribe: string;
        shortDescribe: string;
        picturePath: string;
        id?:number;
        categories?: Category;
        reviews?:Review [];
        creator?: User;

    constructor(

        Name: string,      
        Date: string,
        Time: string,
        Place: string,
        Price:string,
        Language:string,
        LongDescribe: string,
        ShortDescribe: string,
        PicturePath: string,
        Id?:number,
        Categories?: Category,
        Reviews?:Review [],
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
        this.reviews=Reviews;
        this.longDescribe = LongDescribe;
        this.shortDescribe=ShortDescribe;
        this.picturePath=PicturePath;
        this.id= Id;
        this.creator = Creator;

    }
}