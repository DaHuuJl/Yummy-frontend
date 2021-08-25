import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 700)
  }

}
