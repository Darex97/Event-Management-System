import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent {
  constructor(private viewportScroller: ViewportScroller) {} 
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

}
