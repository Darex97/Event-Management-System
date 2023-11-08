export class EventClass {
        name: string;      
        date: string;
        time: string;
        place: string;
        categories: string;
        longDescribe: string;
        picturePath: string;
        shortDescribe: string;

    constructor(

        Name: string,      
        Date: string,
        Time: string,
        Place: string,
        Categories: string,
        LongDescribe: string,
        PicturePath: string,
        ShortDescribe: string

    ) 
    {
        this.name=Name;
        this.date = Date;
        this.time=Time;
        this.place = Place;
        this.categories = Categories;
        this.longDescribe = LongDescribe;
        this.picturePath=PicturePath;
        this.shortDescribe=ShortDescribe;

    }
}