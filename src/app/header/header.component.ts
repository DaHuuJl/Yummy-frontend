import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../shared/services/order-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private orderService:OrderService) { }

  basketSize: string | null = ""

  ngOnInit(): void {
  }

  goExit() {
    localStorage.setItem("token", "")
    this.router.navigate(['login']).then(() => '');
  }

  goBasket() {
    this.router.navigate(['basket']).then(() => '');
  }

  goProfile() {
    this.router.navigate(['profile']).then(() => '');
  }

  checkStorage() {
    this.basketSize = localStorage.getItem("basketSize")

    this.basketSize = "10"
    return this.basketSize
  }
}
