import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CrewService } from '../../services/crew.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-certificate-detail-pop-up',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './certificate-detail-pop-up.component.html',
  styleUrl: './certificate-detail-pop-up.component.css',
})
export class CertificateDetailPopUpComponent {
  constructor(
    public crewService: CrewService,
    private dialogRef: MatDialogRef<CertificateDetailPopUpComponent>,
  ) {}

  onClose() {
    this.crewService.formCertificate.reset();
    this.crewService.initializeCertificateFormGroup();
    this.dialogRef.close();
  }
}
