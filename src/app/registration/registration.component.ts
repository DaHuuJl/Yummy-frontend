import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {WindowDialogRegistrationComponent} from "../window-dialog-registration/window-dialog-registration.component";

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
              private userService:UserService,
              public dialog: MatDialog) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{4}")]),
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
    if (this.form.valid){
      let user = {
        fullName : this.form.value.fullName,
        phoneNumber : this.form.value.phoneNumber,
        password :  this.form.value.password,
        browser: navigator.userAgent
      }
      this.userService.registration(user).subscribe(
        us =>  {
          this.router.navigate(['menu']).then(() => '')
          localStorage.setItem('token', us.token)
        },
        error => {
          console.warn(error)
          this.openDialog()
        }
      )
    }
  }

  private openDialog() {
    this.dialog.open(WindowDialogRegistrationComponent, {
      data : {
        phoneNumber : this.form.value.phoneNumber
      }
    })
  }
}
