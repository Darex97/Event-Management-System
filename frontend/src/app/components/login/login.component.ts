import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  tokenInfo:any;
  hide = true;
  
  loginInfo:Login=new Login("","");

  constructor(private userService: UserService,
    private router: Router,
    private localStorage:LocalStorageService) { }

  onChangeUsername(event : Event){
    this.loginInfo.username = (event.target as HTMLInputElement).value;
    
    
   }

 onChangePassword(event : Event){
    this.loginInfo.password = (event.target as HTMLInputElement).value;
    
 }

//  logInUser(){

//   this.userService.loginUsers(this.username,this.password).subscribe((korisnici:any)=>{
//     this.korisnikZaLogin=korisnici;},
//     (error)=>{

//     },()=>{

//       if(this.korisnikZaLogin[0] !=null)
//     {
    
//      localStorage.setItem("korisnik",this.email); 
//      this.prijavljivanjeService.autorizujKorisnika().subscribe((value)=>{

//     },(error)=>{

//     },()=>{
//      this.router.navigate(['pocetna']);
//     }); 
//    }
//   else{
//     alert("Uneli ste pogrešne podatke!");
//  } 

//     });
 
//   }

onLogin(){

  // this.store.dispatch(loginRequest(user,pass));
  this.userService.loginUsers(this.loginInfo).subscribe((token:any)=>{
    this.tokenInfo=token;
    this.localStorage.set("token",token.token);
    this.localStorage.set("date",token.expiration);
    this.localStorage.set("id",token.id);
    this.router.navigate(['korisnikPocetna']);  
  })


  // rxjs
  // login$: BehaviorSubject<{username, password}>
  // login$.next({username, password})
  // 
  // c1: this.auth.login().subscribe(() => login$.next());
  // c2: this.auth.login().subscribe(() => login$.next());
  // login$.subscribe(() => localStorage stuff)
  // login$.subscribe(() => alert(\localStorage stuff)

  // loginRequest$

  // loginRequest.subscribe(user,pass => {
    //this.auth.login(user,pass).pipe(
    // switchMap(value => loginSuccess$.next(value).
    // catchError(value => loginFail$.next(error))
    //)
  // })









};

}
