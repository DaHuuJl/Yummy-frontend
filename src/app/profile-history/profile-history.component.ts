import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {LoginHistory} from "../shared/interfaces";

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.css']
})
export class ProfileHistoryComponent implements OnInit {

  history: LoginHistory[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
      let token = {
        token: localStorage.getItem("token")
      }

      this.userService.getLoginHistory(token).subscribe(
        history => {
          this.history = history
        },
        error => {
          console.log(error)
        }
      )
    }
  }

}
