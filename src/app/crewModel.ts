export interface Certificate {
  $id:number,
  description:string,
  certificateType: string;
  issueDate: Date | string;
  expiryDate: Date |string;
}

export interface CrewDetails{
  $id:number,
  firstName:string,
  lastName:string,
  nationality:string,
  title:string,
  daysOnBoard:string,
  dailyRate:string,
  currency:string,
  totalIncome:string,
  issueDate: Date;
  expiryDate: Date;
  certificates:Certificate[]
}