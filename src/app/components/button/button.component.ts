import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { CrewPopUpComponent } from '../crew-pop-up/crew-pop-up.component';
import { CrewService } from '../../services/crew.service';
import { CertificatesService } from '../../services/certificates.service';
import { CertificatePopUpComponent } from '../certificate-pop-up/certificate-pop-up.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  constructor(private dialog: MatDialog,
    private crewService: CrewService,
    private certificateService:CertificatesService
  ) {

  }
  createCrew()
  {
    this.crewService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width= '60%',
    this.dialog.open(CrewPopUpComponent,dialogConfig);
    this.crewService.getAllCrew();
  }

  createCertificate()
  {
    this.certificateService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width= '60%',
    this.dialog.open(CertificatePopUpComponent,dialogConfig);
  }
}
