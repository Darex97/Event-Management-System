import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get("https://localhost:7057/UserAdmin/GetUSers")
   }
  userAlredyExist(username:string){ /////ZA REGISTRACIJU  
    return this.httpClient.get("https://localhost:7057/UserAdmin/GetUSers/"+username);
  }
  postUser(user : User ){
    console.log(user);
    return   this.httpClient.post("https://localhost:7057/UserAdmin/AddUser",user)
   }

}
