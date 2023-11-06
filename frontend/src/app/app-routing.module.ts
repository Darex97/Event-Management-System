import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';

const routes: Routes = [
  {path: 'pocetna' , component: PocetnaComponent},
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' },  
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'userProfil' , component: UserProfilComponent},




  { path: '**', component: ErrorPageComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
