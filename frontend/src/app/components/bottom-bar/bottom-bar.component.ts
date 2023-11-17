import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { LocalStorageService } from 'src/app/services/localStorage.services';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {

  //user:User = new User ("", "", "", "", "", "", "", "", "");
  isAdmin:number = 0;

  constructor(private localStorageService: LocalStorageService,
    private userServie: UserService) {  }

  ngOnInit(): void {
  
    this.userServie.getUsersEvents(Number(this.localStorageService.get("id"))).subscribe((userData: any) => {
      this.isAdmin = userData[0].isAdmin;
     // console.log(!!this.isAdmin)
      
    })

  }

  onContact(){
    alert("Name: Anastasia Last name: Khan Email address: anastasia.khan@gmail.com  Phone Number: (500) 555-0150    ");
  }
}
