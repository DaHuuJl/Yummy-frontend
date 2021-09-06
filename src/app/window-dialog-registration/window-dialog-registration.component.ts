import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  phoneNumber: string;
}

@Component({
  selector: 'app-window-dialog-registration',
  templateUrl: './window-dialog-registration.component.html',
  styleUrls: ['./window-dialog-registration.component.css']
})
export class WindowDialogRegistrationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WindowDialogRegistrationComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }
}
