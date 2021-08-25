import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-menu',
  templateUrl: './basket-menu.component.html',
  styleUrls: ['./basket-menu.component.css']
})
export class BasketMenuComponent implements OnInit {

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 700)
  }

}
