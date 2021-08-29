import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token, UserLog, UserReg} from "../interfaces";

@Injectable(
  {providedIn: "root"}
)
export class UserService {
  constructor(private http:HttpClient) {
  }

  login(userReg: UserLog): Observable<Token> {
    return  this.http.post<Token>('/api/user/authorization', userReg)
  }

  registration(userReg: UserReg): Observable<Token> {
    return  this.http.post<Token>('/api/user/registration', userReg)
  }
}
