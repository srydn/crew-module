import { Injectable } from '@angular/core';
import { CrewDetails } from '../crewModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  crewDetailsList: CrewDetails[] = [
    {
      $id: 0,
      firstName: 'John',
      lastName: 'Andrew',
      nationality: 'French',
      title: 'Captain',
      daysOnBoard: '5',
      dailyRate: '0.5',
      currency: '$',
      totalIncome: '2400$',
      issueDate: new Date(),
      expiryDate: new Date(),
      certificates: [
        {
          $id: 0,
          description: 'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
          certificateType: 'Personal Survival Technique',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 1,
          description: 'This course covers the requirements of STCW 78/95, Section A-VI/1, Par. 2, Table A-VI/2 on meeting the minimum standard of competence in fire prevention and firefighting.',
          certificateType: 'Fire Prevention and Fire Fighting',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 2,
          description: 'This course covers the requirements of the STCW code Convention Chapter VI, Section AV/1, Table A-VI/1-3.',
          certificateType: 'Elementary First Aid',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 3,
          description: 'Personal Safety and Social Responsibility teaches a broad, if basic,  knowledge of and compliance with safe working practices on board a vessel. The course aims to make new crew members familiar with life on board, employment and expectations and essential safety considerations.',
          certificateType: 'Personal Safety and Social Responsibility',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
      ],
    },
    {
      $id: 1,
      firstName: 'Jane',
      lastName: 'Andrew',
      nationality: 'English',
      title: 'Cook',
      daysOnBoard: '3',
      dailyRate: '0.5',
      currency: '€',
      totalIncome: '2600£',
      issueDate: new Date(),
      expiryDate: new Date(),
      certificates: [
        {
          $id: 1,
          description: 'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
          certificateType: 'Personal Survival Technique',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 1,
          description: 'This course covers the requirements of STCW 78/95, Section A-VI/1, Par. 2, Table A-VI/2 on meeting the minimum standard of competence in fire prevention and firefighting.',
          certificateType: 'Fire Prevention and Fire Fighting',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 2,
          description:  'This course covers the requirements of the STCW code Convention Chapter VI, Section AV/1, Table A-VI/1-3.',
          certificateType: 'Elementary First Aid',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 3,
          description: 'Personal Safety and Social Responsibility teaches a broad, if basic,  knowledge of and compliance with safe working practices on board a vessel. The course aims to make new crew members familiar with life on board, employment and expectations and essential safety considerations.',
          certificateType: 'Personal Safety and Social Responsibility',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
      ],
    },
    {
      $id: 2,
      firstName: 'John',
      lastName: 'Andrew',
      nationality: 'French',
      title: 'Captain',
      daysOnBoard: '5',
      dailyRate: '0.5',
      currency: '$',
      totalIncome: '2400$',
      issueDate: new Date(),
      expiryDate: new Date(),
      certificates: [
        {
          $id: 0,
          description: 'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
          certificateType: 'Personal Survival Technique',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 1,
          description: 'This course covers the requirements of STCW 78/95, Section A-VI/1, Par. 2, Table A-VI/2 on meeting the minimum standard of competence in fire prevention and firefighting.',
          certificateType: 'Fire Prevention and Fire Fighting',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 2,
          description:  'This course covers the requirements of the STCW code Convention Chapter VI, Section AV/1, Table A-VI/1-3.',
          certificateType: 'Elementary First Aid',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 3,
          description: 'Personal Safety and Social Responsibility teaches a broad, if basic,  knowledge of and compliance with safe working practices on board a vessel. The course aims to make new crew members familiar with life on board, employment and expectations and essential safety considerations.',
          certificateType: 'Personal Safety and Social Responsibility',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
      ],
    },
    {
      $id: 3,
      firstName: 'Jane',
      lastName: 'Andrew',
      nationality: 'English',
      title: 'Cook',
      daysOnBoard: '3',
      dailyRate: '0.5',
      currency: '€',
      totalIncome: '2600£',
      issueDate: new Date(),
      expiryDate: new Date(),
      certificates: [
        {
          $id: 0,
          description: 'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
          certificateType: 'Personal Survival Technique',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 1,
          description: 'This course covers the requirements of STCW 78/95, Section A-VI/1, Par. 2, Table A-VI/2 on meeting the minimum standard of competence in fire prevention and firefighting.',
          certificateType: 'Fire Prevention and Fire Fighting',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
      ],
    },
    {
      $id: 4,
      firstName: 'John',
      lastName: 'Andrew',
      nationality: 'French',
      title: 'Captain',
      daysOnBoard: '5',
      dailyRate: '0.5',
      currency: '$',
      totalIncome: '2400$',
      issueDate: new Date(),
      expiryDate: new Date(),
      certificates: [
        {
          $id: 0,
          description: 'The Personal Survival Techniques course includes both theoretical and practical sessions, investigating causes of distress, knowledge and use of equipment, launch and recovery of life rafts, preparation for survival, personal survival skills and use of search and rescue organisations.',
          certificateType: 'Personal Survival Technique',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
        {
          $id: 2,
          description: 'Personal Safety and Social Responsibility teaches a broad, if basic,  knowledge of and compliance with safe working practices on board a vessel. The course aims to make new crew members familiar with life on board, employment and expectations and essential safety considerations.',
          certificateType: 'Personal Safety and Social Responsibility',
          issueDate: new Date(),
          expiryDate: new Date(),
        },
      ],
    },
  ];

  formCrew: FormGroup = new FormGroup({
    $id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    nationality: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    daysOnBoard: new FormControl('', Validators.required),
    dailyRate: new FormControl('', Validators.required),
    currency: new FormControl(null, Validators.required),
    totalIncome: new FormControl('', Validators.required),
    certificates: new FormControl(''),
    issueDate: new FormControl(Date, Validators.required),
    expiryDate: new FormControl(Date, Validators.required),
  });

  formCertificate: FormGroup = new FormGroup({
    $id: new FormControl(null),
    certificateType: new FormControl(''),
    description: new FormControl(''),
    issueDate: new FormControl(new Date()),
    expiryDate: new FormControl(new Date()),
  });
  nationalityList = [
    'Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Argentine',
    'Armenian',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Botswanan',
    'Brazilian',
    'British',
    'Bruneian',
    'Bulgarian',
    'Burkinabe',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape Verdean',
    'Central African',
    'Chadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Comorian',
    'Congolese (Congo-Brazzaville)',
    'Congolese (Congo-Kinshasa)',
    'Costa Rican',
    'Croatian',
    'Cuban',
    'Cypriot',
    'Czech',
    'Danish',
    'Djiboutian',
    'Dominican',
    'Dominican (Dominican Republic)',
    'East Timorese',
    'Ecuadorian',
    'Egyptian',
    'Emirati',
    'English',
    'Equatorial Guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Fijian',
    'Finnish',
    'French',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Greek',
    'Grenadian',
    'Guatemalan',
    'Guinean',
    'Guinea-Bissauan',
    'Guyanese',
    'Haitian',
    'Honduran',
    'Hungarian',
    'Icelandic',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
    'Kazakh',
    'Kenyan',
    'Kiribati',
    'Korean (North)',
    'Korean (South)',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Liberian',
    'Libyan',
    'Liechtensteiner',
    'Lithuanian',
    'Luxembourger',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivian',
    'Malian',
    'Maltese',
    'Marshallese',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monegasque',
    'Mongolian',
    'Montenegrin',
    'Moroccan',
    'Mozambican',
    'Namibian',
    'Nauruan',
    'Nepalese',
    'Dutch',
    'New Zealander',
    'Nicaraguan',
    'Nigerien',
    'Nigerian',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Palestinian',
    'Panamanian',
    'Papua New Guinean',
    'Paraguayan',
    'Peruvian',
    'Filipino',
    'Polish',
    'Portuguese',
    'Qatari',
    'Romanian',
    'Russian',
    'Rwandan',
    'Saint Kitts and Nevis',
    'Saint Lucian',
    'Saint Vincentian',
    'Salvadoran',
    'Samoan',
    'San Marinese',
    'Sao Tomean',
    'Saudi Arabian',
    'Scottish',
    'Senegalese',
    'Serbian',
    'Seychellois',
    'Sierra Leonean',
    'Singaporean',
    'Slovak',
    'Slovenian',
    'Solomon Islander',
    'Somali',
    'South African',
    'Spanish',
    'Sri Lankan',
    'Sudanese',
    'Surinamese',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
    'Togolese',
    'Tongan',
    'Trinidadian/Tobagonian',
    'Tunisian',
    'Turkish',
    'Turkmen',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbek',
    'Vanuatuan',
    'Vatican',
    'Venezuelan',
    'Vietnamese',
    'Welsh',
    'Yemeni',
    'Zambian',
    'Zimbabwean',
  ];

  titleList = [
    'Captain',
    'Chief Officer',
    'Second Officer',
    'Third Officer',
    'Deck Cadet',
    'Chief Engineer',
    'Second Engineer',
    'Third Engineer',
    'Fourth Engineer',
    'Engine Cadet',
    'Boatswain (Bosun)',
    'Able Seaman',
    'Ordinary Seaman',
    'Chief Cook',
    'Assistant Cook',
    'Steward',
    'Oiler',
    'Wiper',
    'Electrician',
    'Pumpman',
    'Fitter',
    'Radio Officer',
    'Motorman',
    'Deckhand',
    'Master',
    'First Mate',
    'Pilot',
    'Mate',
    'Superintendent',
    'Rig Manager',
    'Rig Mechanic',
    'Roughneck',
    'Crane Operator',
    'Welder',
    'Medic',
  ];

  getAllCrew(): CrewDetails[] {
    return this.crewDetailsList;
  }

  getCrewById(id: Number): CrewDetails | undefined {
    return this.crewDetailsList.find((crewDetail) => crewDetail.$id === id);
  }

  getNextId(): number {
    if (this.crewDetailsList.length === 0) {
      return 0; // Start with 0 if the list is empty
    }
    // Find the highest ID in the current list and return the next one
    const maxId = Math.max(...this.crewDetailsList.map((crew) => crew.$id));
    return maxId + 1;
  }
  addCrew(crew: any) {
    crew.$id = this.getNextId();
    this.crewDetailsList.push(crew);
  }

  editCrew(crew: CrewDetails) {
    const index = this.crewDetailsList.findIndex(
      (item) => item.$id === crew.$id
    );
    if (index !== -1) {
      this.crewDetailsList[index].firstName = crew.firstName;
      this.crewDetailsList[index].lastName = crew.lastName;
      this.crewDetailsList[index].nationality = crew.nationality;
      this.crewDetailsList[index].title = crew.title;
      this.crewDetailsList[index].daysOnBoard = crew.daysOnBoard;
      this.crewDetailsList[index].dailyRate = crew.dailyRate;
      this.crewDetailsList[index].currency = crew.currency;
      this.crewDetailsList[index].totalIncome = crew.totalIncome;
      this.crewDetailsList[index].certificates = crew.certificates;
      console.log(this.crewDetailsList, this.crewDetailsList[index], 'EDITED');
    }
  }

  deleteCrew(id: number) {
    this.crewDetailsList = this.crewDetailsList.filter(
      (crew) => crew.$id !== id
    );
    console.log(this.crewDetailsList, 'YENI LISTE');
  }

  initializeFormGroup() {
    this.formCrew.setValue({
      $id: null,
      firstName: '',
      lastName: '',
      nationality: '',
      title: '',
      daysOnBoard: '',
      dailyRate: '',
      currency: '',
      totalIncome: '',
      certificates: [],
      issueDate: new Date(),
      expiryDate: new Date(),
    });
  }

  initializeCertificateFormGroup() {
    this.formCertificate.setValue({
      $id: null,
      certificateType: '',
      description: '',
      issueDate: new Date().toISOString().split('T')[0],
      expiryDate: new Date().toISOString().split('T')[0],
    });
  }

  populateForm(crew: any) {
    this.formCrew.setValue(crew);
  }
  populateCertificateForm(tile: any) {
    const formValues = this.crewDetailsList.find(
      (crew) => crew.$id === tile.$id
    );
    if (formValues?.certificates)
      for (let i = 0; i < formValues?.certificates.length; i++) {
        formValues.certificates[i].issueDate = new Date(
          formValues.certificates[i].issueDate
        )
          .toISOString()
          .split('T')[0];
        formValues.certificates[i].expiryDate = new Date(
          formValues.certificates[i].expiryDate
        )
          .toISOString()
          .split('T')[0];
      }
    if (formValues?.certificates) {
      this.formCertificate.setValue(formValues.certificates[0]);
    }
  }

  sendValueBack(tile: any): Observable<any> {
    return of(this.crewDetailsList.find((crew) => crew.$id === tile.$id));
  }

  constructor() {}
}
