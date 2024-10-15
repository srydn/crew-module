import { Component,inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CrewService } from '../../crew.service';
import { CrewDetails } from '../../crewModel';
@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule,MatMenuModule,MatIconModule],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {
crewDetailsList: CrewDetails[] = [];

crewService: CrewService = inject(CrewService);

constructor() {
  this.crewDetailsList = this.crewService.getAllCrew();
}
}
