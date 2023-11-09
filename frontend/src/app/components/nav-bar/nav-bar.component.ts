import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.services';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public idUser:string | null ="";

  constructor(private localStorage:LocalStorageService,
    private router: Router) {

  }

  ngOnInit(): void {
   this.idUser = this.localStorage.get("id");

  }

  onLogOut(){
    this.localStorage.clear()
    this.router.navigate(['pocetna']); 
  }

}
