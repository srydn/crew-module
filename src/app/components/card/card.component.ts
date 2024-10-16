import { Component, inject, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { CrewDetails } from '../../crewModel';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NavbarComponent,MatTabsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  crewCard:any;
  route:ActivatedRoute = inject(ActivatedRoute);
  cardId = 0;
  constructor(private crewService:CrewService) {
    this.cardId = Number(this.route.snapshot.params['cardId'])
  }
  ngOnInit() {
    this.crewCard = this.findCrewCardByID();
  }
findCrewCardByID () {
  return this.crewService.crewDetailsList.find((crewDetail) => crewDetail.$id === this.cardId);

  

}
}
