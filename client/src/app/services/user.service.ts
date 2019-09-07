import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userSubject = new BehaviorSubject<any>([]);
  activeUsers = new BehaviorSubject<any>(null);
  openProfile = new BehaviorSubject<any>(null);
  private _user;
  private users = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private socket: Socket
  ) {
    this.socket.fromEvent("statusupdate").subscribe((update: string) => {
      let data = JSON.parse(update);
      this.users.map(user => {
        if (user.userId == data.userId) {
          user.online = data.status;
        }
        return user;
      });
      this.activeUsers.next(this.users);
    });
  }

  viewProfile(id) {
    console.log(this.users.filter(u => u.userId == id));
    this.openProfile.next(this.users.filter(u => u.userId == id)[0]);
  }

  setUser(user) {
    this._user = user;
    this.populateUser();
    this.userSubject.next(user);
    document.title = `${user.firstName} ${user.lastName} - ChatApp`;
    this.getAllUsers();
  }

  private populateUser() {
    this.apiService.get("/user/profile").subscribe(res => {
      if (res.success) {
        this._user = res.data.user;
        this.userSubject.next(this._user);
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

  private getActiveUsers() {
    return Observable.create(o => {
      this.apiService.get("/user/active-users").subscribe(res => {
        if (res.success) o.next(this.processUsers(res.data.users));
        else o.next([]);
      });
    });
  }

  getAllUsers() {
    this.apiService.get("/user/active-users").subscribe(res => {
      if (res.success) {
        this.users = this.processUsers(res.data.users);
        this.activeUsers.next(this.users);
      }
    });
  }

  updateUserProfile(data, image = null) {
    return Observable.create(ob => {
      const formData: FormData = new FormData();
      if (image) formData.append("file", image, image.name);
      formData.append("data", JSON.stringify(data));
      this.apiService.post("/user/update-profile", formData).subscribe(
        res => {
          if (res.success) this.populateUser();
          ob.next(res.success);
        },
        err => {
          ob.next(false);
        }
      );
    });
  }
  getUser() {
    return this._user;
  }

  processUsers(users) {
    users.forEach(user => this.processUser(user));
    return users;
  }

  processUser(user) {
    if (user.profileImagePath)
      user.profileImagePath = `${environment.SERVER_URL}${user.profileImagePath}`;
    else
      user.profileImagePath = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=0D8ABC&color=fff&rounded=true`;
    return user;
  }
}
