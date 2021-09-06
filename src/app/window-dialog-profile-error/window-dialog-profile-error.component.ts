import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface ErrorData {
  error: string;
}

@Component({
  selector: 'app-window-dialog-profile-error',
  templateUrl: './window-dialog-profile-error.component.html',
  styleUrls: ['./window-dialog-profile-error.component.css']
})
export class WindowDialogProfileErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WindowDialogProfileErrorComponent>,@Inject(MAT_DIALOG_DATA) public data: ErrorData) {
  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
    location.reload()
  }
}
