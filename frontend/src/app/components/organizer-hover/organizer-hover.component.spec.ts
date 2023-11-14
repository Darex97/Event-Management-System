import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerHoverComponent } from './organizer-hover.component';

describe('OrganizerHoverComponent', () => {
  let component: OrganizerHoverComponent;
  let fixture: ComponentFixture<OrganizerHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerHoverComponent]
    });
    fixture = TestBed.createComponent(OrganizerHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
