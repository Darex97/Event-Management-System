import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getUsersAuth() {
    return this.httpClient.get("https://localhost:7057/UserAdmin/GetUSersAuth")
  }

  getUsersEvents(idUser: number) {
    return this.httpClient.get("https://localhost:7057/UserAdmin/GetUserEvents/" + idUser)
  }

  userAlredyExist(username: string) { /////ZA REGISTRACIJU  
    return this.httpClient.get("https://localhost:7057/UserAdmin/GetUSers/" + username);
  }

  postUser(user: User) {

    return this.httpClient.post("https://localhost:7057/api/Authenticate/register", user)
  }

  loginUsers(loginInfo: Login) {
    return this.httpClient.post("https://localhost:7057/api/Authenticate/login", loginInfo)
  }
  putUserForChange(user:User){
    
    return this.httpClient.put("https://localhost:7057/UserAdmin/ChangeUser/"+user.id+"/"+user.firstName+"/"+user.lastName+"/"+user.city+"/"+user.email+"/"+user.gender+"/"+user.picturePath,user)
   }

}
