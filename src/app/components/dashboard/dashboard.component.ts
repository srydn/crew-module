import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { GridListComponent } from '../grid-list/grid-list.component';
import { CrewPopUpComponent } from '../crew-pop-up/crew-pop-up.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, CardComponent, NavbarComponent, GridListComponent, CrewPopUpComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
