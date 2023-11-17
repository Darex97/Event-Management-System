import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class AppInitService {
    
    public rsdValueForOneEur:number = 0;

    constructor(public httpClient: HttpClient) {
    }
    
    Init() {
 
        // return new Promise<void>((resolve, reject) => {
        //     console.log("AppInitService.init() called");
        //     ////do your initialisation stuff here  
        //     setTimeout(() => {
        //         console.log('AppInitService Finished');
        //         resolve();
        //     }, 6000);
 
        // });
        //console.log("start")
        return new Promise<void>((resolve, reject) => {
            this.EurToRsdCur().subscribe((data:any)=>{
                this.rsdValueForOneEur =  data.eur.rsd;
               
                resolve();
            });
            
        });

    }


    EurToRsdCur(){
        return this.httpClient.get('/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
      }
    getEurToRsdCur(){
        return this.rsdValueForOneEur;
      }

      
}

