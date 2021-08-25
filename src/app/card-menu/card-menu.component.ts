import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  openSnackBar() {
    let x = document.getElementById("snackbar");
    // @ts-ignore
    x.className = "show";
    setTimeout(function(){ // @ts-ignore
      x.className = x.className.replace("show", ""); }, 3000);
  }
}
