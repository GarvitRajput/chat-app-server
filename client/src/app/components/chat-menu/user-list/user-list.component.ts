import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() updateUser = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  updateActiveUser(index){
    this.updateUser.emit(index);
  }
}
