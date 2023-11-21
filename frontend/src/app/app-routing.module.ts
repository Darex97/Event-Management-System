import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { EventInformationComponent } from './components/event-information/event-information.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { KorisnikPocetnaComponent } from './components/korisnik-pocetna/korisnik-pocetna.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AdminPocetnaComponent } from './components/admin-pocetna/admin-pocetna.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path: 'pocetna' , component: PocetnaComponent},
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' },  
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'userProfil' , component: UserProfilComponent},
  {path: 'eventsList/eventInformation' , component: EventInformationComponent},
  {path: 'eventsList/eventInformation/:' , component: EventInformationComponent},
  {path: 'eventsList' , component: EventsListComponent},
  {path: 'eventsList/:' , component: EventsListComponent},
  {path: 'createEvent' , component: CreateEventComponent},
  {path: 'korisnikPocetna' , component: KorisnikPocetnaComponent},
  {path: 'myEvents' , component: MyEventsComponent},
  {path: 'editEvent' , component: EditEventComponent},
  {path: 'adminPocetna' , component: AdminPocetnaComponent},
  {path: 'map' , component: MapComponent},




  { path: '**', component: ErrorPageComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
