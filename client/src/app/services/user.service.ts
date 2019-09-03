import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userSubject = new BehaviorSubject<any>(null);
  private _user;
  private users;
  constructor(private apiService: ApiService, private router: Router) {}
  setUser(user) {
    this._user = user;
    this.populateUser();
    this.userSubject.next(user);
    document.title = `${user.firstName} ${user.lastName} - ChatApp`;
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

  getActiveUsers() {
    return Observable.create(o => {
      this.apiService.get("/user/active-users").subscribe(res => {
        if (res.success) o.next(this.processUsers(res.data.users));
        else o.next([]);
      });
    });
  }

  getAllUsers() {
    return Observable.create(o => {
      this.apiService.get("/user/active-users").subscribe(res => {
        if (res.success) {
          this.users = res.data.users;
          o.next(this.processUsers(this.users));
        } else o.next([]);
      });
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
