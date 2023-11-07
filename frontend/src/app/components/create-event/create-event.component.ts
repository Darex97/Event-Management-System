import { Component } from '@angular/core';
import { ExampleHeader } from '../signup/exampleHeader';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  exampleHeader = ExampleHeader;
}
