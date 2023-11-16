import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(public httpClient: HttpClient) { }

  getUserRegistratedEvents(idUser: number) {
    return this.httpClient.get(environment.apiUrl+"Event/GetEventWhereUserRegistrated/" + idUser)
  }
  getRegistratedUsersForEvent(name: string) {
    return this.httpClient.get(environment.apiUrl+"Event/GetRegistratedUsersForEvent/" + name)
  }
}
