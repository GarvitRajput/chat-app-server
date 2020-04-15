import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "[app-right-panel]",
  templateUrl: "./right-panel.component.html",
  styleUrls: ["./right-panel.component.scss"],
})
export class RightPanelComponent implements OnInit {
  user;
  constructor(private userService: UserService) {
    this.userService.userSubject.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}
}
