import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "[app-user-list-item]",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"]
})
export class UserListItemComponent implements OnInit {
  @Input() user;
  constructor(private userService:UserService) {}

  ngOnInit() {}
  viewProfile(){
    this.userService.viewProfile(this.user.userId)
  }
}
