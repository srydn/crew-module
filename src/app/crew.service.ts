import { Injectable } from '@angular/core';
import { CrewDetails } from './crewModel';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  protected crewDetailsList: CrewDetails[] = [
    {
      id:0,
      firstName: 'John',
      lastName: 'Andrew',
      nationality: 'French',
      title: 'Captain',
      daysOnBoard: '5',
      dailyRate: '0.5',
      currency: '$',
      totalIncome: '2400$',
      certificates: 'Personal Survival Technique',
    },
    {
      id:1,
      firstName: 'Jane',
      lastName: 'Andrew',
      nationality: 'English',
      title: 'Cook',
      daysOnBoard: '3',
      dailyRate: '0.5',
      currency: '€',
      totalIncome: '2600£',
      certificates: 'Personal Survival Technique',
    },
  ];
getAllCrew():CrewDetails[] {
return this.crewDetailsList; 
}

getCrewById(id:Number): CrewDetails | undefined{
  return this.crewDetailsList.find(crewDetail =>crewDetail.id===id);
}

getNextId():number {
  if (this.crewDetailsList.length === 0) {
    return 0; // Start with 0 if the list is empty
  }
  // Find the highest ID in the current list and return the next one
  const maxId = Math.max(...this.crewDetailsList.map(crew => crew.id));
  return maxId + 1;

}
  constructor() {}
}
