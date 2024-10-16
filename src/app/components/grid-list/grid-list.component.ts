import { Component,inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CrewService } from '../../services/crew.service';
import { CrewDetails } from '../../crewModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrewPopUpComponent } from '../crew-pop-up/crew-pop-up.component';
import { NotificationService } from '../../services/notification.service';
import { RouterLink } from '@angular/router';
import { CertificateDetailPopUpComponent } from '../certificate-detail-pop-up/certificate-detail-pop-up.component';
@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule,MatMenuModule,MatIconModule,RouterLink],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {
crewDetailsList: CrewDetails[] = [];

crewService: CrewService = inject(CrewService);

constructor(private dialog: MatDialog,
  private notificationService: NotificationService,
  public crewServicex: CrewService
) {
  this.crewDetailsList = this.crewService.getAllCrew();

}

onEdit(row:CrewDetails){
  this.crewService.populateForm(row);
  console.log(row,"ROW");
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width= '60%',
  this.dialog.open(CrewPopUpComponent,dialogConfig);
  this.crewDetailsList = this.crewService.getAllCrew();
  

}
onDelete(row:CrewDetails){
  if(confirm('Are you sure to delete this record?')){
    this.crewService.deleteCrew(row.$id);
    this.notificationService.warn('Deleted successfully!');
  }
  this.crewDetailsList = this.crewService.getAllCrew();

}

showCertificates(tile:any)
{
this.crewService.populateCertificateForm(tile);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width= '60%',

  this.dialog.open(CertificateDetailPopUpComponent,dialogConfig);
}
 }
