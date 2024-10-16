import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import{MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

config: MatSnackBarConfig = {
  duration:2000,
  horizontalPosition:'right',
  verticalPosition:'top'
}

  success(msg:string) {
    this.snackBar.open(msg,'',this.config);
  };

  warn(msg:string) {
    this.snackBar.open(msg,'',this.config);
  };
  }

 