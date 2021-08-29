import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loading: boolean = false;
  form: FormGroup

  constructor(private router: Router) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{4}")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9].*)(?=.*[a-z].*)(?=.*[A-Z].*)[0-9a-zA-Z]{8,}$")])
    })
  }

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
