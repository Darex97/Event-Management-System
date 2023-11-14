import { Component, Input } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-organizer-hover',
  templateUrl: './organizer-hover.component.html',
  styleUrls: ['./organizer-hover.component.scss']
})
export class OrganizerHoverComponent {
  @Input() userForShow:User = new User("","","","","","","","","");
}
