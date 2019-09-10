import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "[app-user-info]",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  user;
  opened = false;
  constructor(private userService: UserService) {
    this.userService.openProfile.subscribe(user => {
      if (user) {
        this.user = user;
        this.opened = true;
        document.getElementById("user-info").classList.add("mobile-open");
      }
    });
  }

  closeSidebar() {
    this.opened = false;
    document.getElementById("user-info").classList.remove("mobile-open");
  }

  ngOnInit() {}
}
