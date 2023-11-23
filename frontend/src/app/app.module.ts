import { NgModule, APP_INITIALIZER  } from '@angular/core';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserService } from './services/user.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { OrganizerHoverComponent } from './components/organizer-hover/organizer-hover.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EurToRsdPipe } from './pipes/eur-to-rsd.pipe';
import { AdminPocetnaComponent } from './components/admin-pocetna/admin-pocetna.component';
////
import { AppInitService } from './app-init.service';
import { ReviewPopupComponent } from './components/review-popup/review-popup.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
 
export function initializeApp1(appInitService: AppInitService) {
  return () => { 
    return appInitService.Init();
  }
}







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
    BottomBarComponent,
    MyEventsComponent,
    EditEventComponent,
    OrganizerHoverComponent,
    EurToRsdPipe,
    AdminPocetnaComponent,
    ReviewPopupComponent,
    MapComponent
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
    MatIconModule,
    MatRadioModule,
    MatMenuModule,
    MatSlideToggleModule,
    LeafletModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  },
  AppInitService,
  { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [AppInitService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
