import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token, UserLog, UserReg, User, LoginHistory} from "../interfaces";
import {dashCaseToCamelCase, error} from "@angular/compiler/src/util";
import {filter} from "rxjs/operators";

@Injectable(
  {providedIn: "root"}
)
export class UserService {
  constructor(private http:HttpClient) {
  }

  login(userReg: UserLog): Observable<Token> {
    return this.http.post<Token>('/api/user/authorization', userReg)
  }

  registration(userReg: UserReg): Observable<Token> {
    return this.http.post<Token>('/api/user/registration', userReg)
  }

  getUserInfo(token: { token: string | null }): Observable<User> {
    return this.http.put<User>('/api/user/userInfo', token)
  }

  changeImage(image: string) {
    let fd = {
      token: localStorage.getItem("token"),
      image: image
    }
    return this.http.put('/api/user/changeImage', fd)

  }

  changePassword(password: { oldPassword: string; newPassword: string; token: string | null }) {
    return this.http.put('/api/user/changePassword', password)
  }

  changeFullName(fullName: { fullName: string; token: string | null }) {
    return this.http.put('/api/user/changeFullName', fullName)
  }

  changePhoneNumber(phoneNumber: { phoneNumber: string; token: string | null }) {
    return this.http.put('/api/user/changePhoneNumber', phoneNumber)
  }

  getLoginHistory(token: { token: string | null }): Observable<LoginHistory[]> {
    return this.http.put<LoginHistory[]>('/api/user/getLoginHistory', token)
  }


  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
