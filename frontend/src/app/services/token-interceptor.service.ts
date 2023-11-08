import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from './localStorage.services';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor( private injector:Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
    let localStorageService= this.injector.get(LocalStorageService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorageService.get("token")}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
