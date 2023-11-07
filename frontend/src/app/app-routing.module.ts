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

const routes: Routes = [
  {path: 'pocetna' , component: PocetnaComponent},
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' },  
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'userProfil' , component: UserProfilComponent},
  {path: 'eventInformation' , component: EventInformationComponent},
  {path: 'eventsList' , component: EventsListComponent},
  {path: 'createEvent' , component: CreateEventComponent},
  {path: 'korisnikPocetna' , component: KorisnikPocetnaComponent},




  { path: '**', component: ErrorPageComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
