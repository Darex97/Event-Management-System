import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-korisnik-pocetna',
  templateUrl: './korisnik-pocetna.component.html',
  styleUrls: ['./korisnik-pocetna.component.scss']
})
export class KorisnikPocetnaComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public users: User[] = [];
 
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsersAuth().subscribe((usersData: any) => {

      this.users = usersData;
      console.log(this.users);
    })

  }
  

}
