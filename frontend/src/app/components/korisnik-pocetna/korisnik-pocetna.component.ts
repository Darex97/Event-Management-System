import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { EventServiceService } from 'src/app/services/event-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-korisnik-pocetna',
  templateUrl: './korisnik-pocetna.component.html',
  styleUrls: ['./korisnik-pocetna.component.scss']
})
export class KorisnikPocetnaComponent {

  longText = `Events are more than just gatherings; they're powerful connectors and experience enhancers.
   In a world saturated with digital interactions, face-to-face events provide a unique platform for
    meaningful connections. Whether it's networking at a professional conference, celebrating culture, 
    or simply gathering like-minded individuals, events foster personal and professional relationships 
    that transcend virtual limitations.`;

  public users: User[] = [];
  public categories: string[] = ["Social","Educational","Cultural","Sports","Business","Entertainment","Charity and Fundraising","Technology and Innovation","Health and Wellness","Community"];
 
  constructor(private userService: UserService,
    private eventService:EventServiceService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getUsersAuth().subscribe((usersData: any) => {

      this.users = usersData;
      console.log(this.users);
    })

  }
  
  onCategoryClick(category:string){
    this.eventService.setCategory(category);
    this.router.navigate(['eventsList'])
  }
}
