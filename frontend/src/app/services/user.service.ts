import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Login } from '../classes/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(public httpClient: HttpClient) { }

  getUsersAuth() {
    return this.httpClient.get(environment.apiUrl+"UserAdmin/GetUSersAuth")
  }
  // getUsersAuth() {
  //   return this.httpClient.get("https://localhost:7057/UserAdmin/GetUSersAuth")
  // }

  getUsersEvents(idUser: number) {
    return this.httpClient.get(environment.apiUrl+"UserAdmin/GetUserEvents/" + idUser)
  }

  userAlredyExist(username: string) { /////ZA REGISTRACIJU  
    return this.httpClient.get(environment.apiUrl+"UserAdmin/GetUSers/" + username);
  }

  postUser(user: User) {

    return this.httpClient.post(environment.apiUrl+"api/Authenticate/register", user)
  }

  loginUsers(loginInfo: Login) {
    return this.httpClient.post(environment.apiUrl+"api/Authenticate/login", loginInfo)
  }
  putUserForChange(user:User){
    
    return this.httpClient.put(environment.apiUrl+"UserAdmin/ChangeUser/"+user.id+"/"+user.firstName+"/"+user.lastName+"/"+user.city+"/"+user.email+"/"+user.gender+"/"+user.picturePath,user)
   }
  putUserForChangeFromBody(user:User){
    
    return this.httpClient.put(environment.apiUrl+"UserAdmin/ChangeUserFromBody",user)
   }
   deleteUser(userId?:number){
    return   this.httpClient.delete(environment.apiUrl+"UserAdmin/DeleteUser/"+userId)
   }
}
