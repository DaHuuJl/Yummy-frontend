import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {LoginHistory, User} from "../shared/interfaces";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {WindowDialogProfileErrorComponent} from "../window-dialog-profile-error/window-dialog-profile-error.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User
  hide = true
  hide2 = true
  formFullName: FormGroup
  formPhoneNumber: FormGroup
  formPass: FormGroup
  image!: File;
  imgSrc!: string
  @ViewChild("input") inputRef!: ElementRef


  constructor(private userService: UserService,
              private router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {

    this.formFullName = new FormGroup({
      fullName: new FormControl(null, [Validators.required])
    })

    this.formPhoneNumber = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{4}")]),
    })

    this.formPass = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9].*)(?=.*[a-z].*)(?=.*[A-Z].*)[0-9a-zA-Z]{8,}$")]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9].*)(?=.*[a-z].*)(?=.*[A-Z].*)[0-9a-zA-Z]{8,}$")])
    })
  }

  ngOnInit(): void {

    if(localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
      let token = {
        token: localStorage.getItem("token")
      }

      this.userService.getUserInfo(token).subscribe(
        user => {
          this.user = user
          console.log(this.user.fullName)
          if(this.user.image == null || this.user.image == "") {
            this.imgSrc = "../../assets/default_photo.jpg"
          } else {
            this.imgSrc = this.user.image
          }
          //console.log("OK")
        },
        error => {
          this.goRegistration()
          //console.log("error")
        }
      )
    } else {
      this.goRegistration()
      //console.log("error")
    }



    if(localStorage.getItem("profileChange") != "" && localStorage.getItem("profileChange") != null) {
      this.openSnackBar()
      localStorage.setItem("profileChange", '')
    }
  }

  goRegistration() {
    this.router.navigate(['login']).then(() => '');
  }

  changeImage() {

    console.log("????????????????")
  }

  changePassword() {
    if(this.formPass.valid) {
      let password = {
        token: localStorage.getItem("token"),
        oldPassword: this.formPass.value.oldPassword,
        newPassword: this.formPass.value.newPassword
      }
      this.userService.changePassword(password).subscribe(
        () => {
          location.reload();
          localStorage.setItem("profileChange", '?????? ???????????? ?????????????? ??????????????')
        },error => {
          this.openDialog("???? ?????????????? ???????????????? ?????? ????????????, ?????????????????? ???????????????????????? ??????????")
        }
      )
    }
  }

  changeFullName() {
    if(this.formFullName.valid) {
      let fullName = {
        token: localStorage.getItem("token"),
        fullName: this.formFullName.value.fullName
      }
      this.userService.changeFullName(fullName).subscribe(
        () => {
          location.reload();
          localStorage.setItem("profileChange", '???????? ?????? ?????????????? ????????????????')
        },error => {
          this.openDialog("???? ?????????????? ???????????????? ???????? ??????")
        }
      )
    }
  }

  changePhoneNumber() {
    if(this.formPhoneNumber.valid) {
      let phoneNumber = {
        token: localStorage.getItem("token"),
        phoneNumber: this.formPhoneNumber.value.phoneNumber
      }
      this.userService.changePhoneNumber(phoneNumber).subscribe(
        () => {
          location.reload();
          localStorage.setItem("profileChange", '?????????? ???????????????? ?????????????? ??????????????')
        },error => {
          this.openDialog("???? ?????????????? ???????????????? ?????? ?????????? ????????????????")
        }
      )
    }
  }

  openDialog(error: string) {
    this.dialog.open(WindowDialogProfileErrorComponent, {
      data : {
        error : error
      }
    })
  }

  openSnackBar() {
    this.snackBar.open(localStorage.getItem("profileChange") + '', '??????????????', {panelClass: ['blue-snackbar', 'mat-accent']});
  }

  loadPhoto() {
    this.inputRef.nativeElement.click()
  }

  async OnFileUpload(event: any) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
    let img
    reader.onloadend = () => {
      img = reader.result as string;
      this.userService.changeImage(img).subscribe(
        () => {
          localStorage.setItem("profileChange", '???????????? ?????????????? ??????????????')
          location.reload()
        }, error => {
          console.log(error)
        }
      )
    };

  }


}
