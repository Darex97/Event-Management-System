import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {


  onContact(){
    alert("Name: Anastasia Last name: Khan Email address: anastasia.khan@gmail.com  Phone Number: (500) 555-0150    ");
  }
}
