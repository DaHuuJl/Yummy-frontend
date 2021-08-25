import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true;
  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 700)
  }

  goLogin(){
    this.router.navigate(['login']).then(() => '');
  }

  goHome() {
    this.router.navigate(['menu']).then(() => '');
  }
}
