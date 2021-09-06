import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-window-dialog-login',
  templateUrl: './window-dialog-login.component.html',
  styleUrls: ['./window-dialog-login.component.css']
})
export class WindowDialogLoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WindowDialogLoginComponent>) {
  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }

}
