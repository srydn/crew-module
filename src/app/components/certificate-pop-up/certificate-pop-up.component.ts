import { Component } from '@angular/core';
import { CertificatesService } from '../../services/certificates.service';
import { NotificationService } from '../../services/notification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-certificate-pop-up',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule,ReactiveFormsModule,MatGridListModule,MatFormField,MatInputModule],
  templateUrl: './certificate-pop-up.component.html',
  styleUrl: './certificate-pop-up.component.css',
})
export class CertificatePopUpComponent {
  constructor(
    public certificateService: CertificatesService,
    public notificationService: NotificationService,
    private dialogRef: MatDialogRef<CertificatePopUpComponent>
  ) {}
  onClose() {
    this.certificateService.formCertificate.reset();
    this.certificateService.initializeFormGroup();
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.certificateService.formCertificate.valid) {
      this.certificateService.addCertificate(
        this.certificateService.formCertificate.value
      );

      this.certificateService.formCertificate.reset();
      this.certificateService.initializeFormGroup();
      this.notificationService.success('Created succesfully!');
      this.onClose();
    }
  }
}
