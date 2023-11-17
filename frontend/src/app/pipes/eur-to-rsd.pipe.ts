import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { AppInitService } from '../app-init.service';

@Pipe({
  name: 'eurToRsd'
})
export class EurToRsdPipe implements PipeTransform {

  constructor(private httpClient: HttpClient,
    private eventService:EventServiceService,
    private initService:AppInitService)
  {
    
  }

  ngOnInit(): void {
  
  }
  
  transform(value: string) {
    
      let money:number = Number(value);
      money = money * this.initService.getEurToRsdCur();;
      return money;
  }

  // getEurToRsdCur(){
  //   return this.httpClient.get('/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
  // }

}
