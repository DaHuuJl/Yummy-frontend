import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true
  loading: boolean = false
  form: FormGroup

  constructor(private router: Router,
              userService:UserService) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{4}")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9].*)(?=.*[a-z].*)(?=.*[A-Z].*)[0-9a-zA-Z]{8,}$")])
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true
    }, 700)
  }



  goLogin(){
    this.router.navigate(['login']).then(() => '')
  }

  goHome() {
    this.router.navigate(['menu']).then(() => '')
  }

  OnSubmit() {

  }
}
