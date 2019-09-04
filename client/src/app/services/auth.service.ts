import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import * as CryptoJS from "crypto-js";
import { SocketService } from "./socket.service";
import {
  OutgoingSignal,
  SignalType,
  OutgoingSignalData
} from "../models/signal";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private userService: UserService,
    private socketService: SocketService,
    private router:Router
  ) {}

  private loggedInUserId = 0;

  isLoggedIn(): Observable<boolean> {
    return new Observable(ob => {
      if (this.loggedInUserId) ob.next(true);
      else {
        this.apiService.get("/user/profile").subscribe(res => {
          if (res.success) {
            this.userService.setUser(res.data.user);
            this.registerUserOnSocker(this.cookieService.get('token'));
            this.loggedInUserId = res.data.user.userId;
            ob.next(true);
          } else {
            this.router.navigate(["/login"]);
            ob.next(false);
          }
        });
      }
    });
  }

  logOut(){
    this.cookieService.delete("token");
  }

  authenticate(cred) {
    cred.password = CryptoJS.SHA256(cred.password).toString();
    return Observable.create(o => {
      this.apiService.post("/authenticate", cred).subscribe((res: any) => {
        if (res.success) {
          this.cookieService.set("token", res.data.token);
          setTimeout(() => {
            this.registerUserOnSocker(res.data.token);
          }, 0);
          this.userService.setUser(res.data.user);
          o.next(true);
        } else {
          o.next(false);
        }
      });
    });
  }

  private registerUserOnSocker(token) {
    let signal = new OutgoingSignal();
    signal.type = SignalType.register;
    signal.data = new OutgoingSignalData();
    signal.data.message = token;
    this.socketService.sendSignal(signal);
  }

  register(user) {
    user.password = CryptoJS.SHA256(user.password).toString();
    return Observable.create(o => {
      this.apiService.post("/register", user).subscribe((res: any) => {
        if (res.success) {
          this.cookieService.set("token", res.data.token);
          this.registerUserOnSocker(res.data.token);
          this.userService.setUser(res.data.user);
          o.next(true);
        } else {
          o.next(false);
        }
      });
    });
  }
}