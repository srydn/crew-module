import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CrewService } from '../../services/crew.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../../services/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CertificatesService } from '../../services/certificates.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-crew-pop-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './crew-pop-up.component.html',
  styleUrl: './crew-pop-up.component.css',
  providers:[MatDatepickerModule,MatNativeDateModule,{provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}]
})
export class CrewPopUpComponent {
  constructor(
    public service: CrewService,
    public notificationService: NotificationService,
    private dialogRef: MatDialogRef<CrewPopUpComponent>,
    public certificateService:CertificatesService
  ) {
  }


  onSubmit() {
    if (this.service.formCrew.valid) {
      if (
        this.service.crewDetailsList.find(
          (crew) => crew.$id === this.service.formCrew.get('$id')?.value
        )
      ) {
         this.service.editCrew(this.service.formCrew.value);
        console.log('EDIT');
      } else {
         this.service.addCrew(this.service.formCrew.value);
      }

      this.service.formCrew.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Created succesfully!');
      this.onClose();
    }
  }

  onClose() {
    this.service.formCrew.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  getPopUpTitle(): string {
    if (
      this.service.crewDetailsList.find(
        (crew) => crew.$id === this.service.formCrew.get('$id')?.value
      )
    ) {
      return 'Edit Crew';
    } else {
      return 'Create New Crew';
    }
  }

}
