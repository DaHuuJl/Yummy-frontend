import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 700)
  }

  goRegistration(){
    this.router.navigate(['registration']).then(() => '');
  }

  goHome() {
    this.router.navigate(['menu']).then(() => '');
  }
}
