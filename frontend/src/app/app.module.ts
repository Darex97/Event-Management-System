import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ovo dodajem
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { LoginComponent } from './components/login/login.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ErrorPageComponent,
    SignupComponent,
    LoginComponent,
    UserProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //i ovo
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
