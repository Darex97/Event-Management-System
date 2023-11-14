import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(public httpClient: HttpClient) { }

  getUserRegistratedEvents(idUser: number) {
    return this.httpClient.get("https://localhost:7057/Event/GetEventWhereUserRegistrated/" + idUser)
  }
}
