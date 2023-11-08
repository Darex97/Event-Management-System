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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventInformationComponent } from './components/event-information/event-information.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { KorisnikPocetnaComponent } from './components/korisnik-pocetna/korisnik-pocetna.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    ErrorPageComponent,
    SignupComponent,
    LoginComponent,
    UserProfilComponent,
    NavBarComponent,
    EventInformationComponent,
    EventsListComponent,
    CreateEventComponent,
    KorisnikPocetnaComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //i ovo
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
