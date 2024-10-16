import { Injectable } from '@angular/core';
import { CertificateTypes } from '../certificateModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  constructor() {}

  formCertificate: FormGroup = new FormGroup({
    $id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
  });
  certificateTypesList: CertificateTypes[] = [
    {
      $id: 0,
      certificateType: 'Personal Survival Technique',
      description:
        'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
    },
    {
      $id: 1,
      certificateType: 'Fire Prevention and Fire Fighting',
      description:
        'This course covers the requirements of STCW 78/95, Section A-VI/1, Par. 2, Table A-VI/2 on meeting the minimum standard of competence in fire prevention and firefighting.',
    },
    {
      $id: 2,
      certificateType: 'Elementary First Aid',
      description:
        'This course covers the requirements of the STCW code Convention Chapter VI, Section AV/1, Table A-VI/1-3.',
    },
    {
      $id: 3,
      certificateType: 'Personal Safety and Social Responsibilities',
      description:
        'Personal Safety and Social Responsibility teaches a broad, if basic,  knowledge of and compliance with safe working practices on board a vessel. The course aims to make new crew members familiar with life on board, employment and expectations and essential safety considerations.',
    },
    {
      $id: 4,
      certificateType:
        'Proficiency in Survival Craft and  Rescue Boats other than Fast Rescue Boats',
      description:
        'This STCW course is designed for those who are required to perform survival craft and rescue boat operations during shipboard emergency response situations.',
    },
  ];

  getAllCertificateTypes(): CertificateTypes[] {
    return this.certificateTypesList;
  }

  getNextId(): number {
    if (this.certificateTypesList.length === 0) {
      return 0; // Start with 0 if the list is empty
    }
    // Find the highest ID in the current list and return the next one
    const maxId = Math.max(
      ...this.certificateTypesList.map((certificate) => certificate.$id)
    );
    return maxId + 1;
  }
  addCertificate(certificate: CertificateTypes) {
    certificate.$id = this.getNextId();
    this.certificateTypesList.push(certificate);
    console.log(certificate, 'certificate');
  }

  initializeFormGroup() {
    this.formCertificate.setValue({
      $id: null,
      name: '',
      description: '',
    });
  }
}
