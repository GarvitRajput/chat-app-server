import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { Toppy, RelativePosition, OutsidePlacement } from "toppy";
import { UserService } from "src/app/services/user.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-new-group-model",
  templateUrl: "./new-group-model.component.html",
  styleUrls: ["./new-group-model.component.scss"]
})
export class NewGroupModelComponent implements OnInit {
  @ViewChild("tpl", { static: true }) tpl: TemplateRef<any>;
  overlay;
  @ViewChild("el", { static: true })
  el: ElementRef;
  filteredUsers = [];
  users = [];
  selectedUsers = [];
  form: any;
  message: string;
  submitted: boolean;

  constructor(
    private _toppy: Toppy,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      groupName: ["", Validators.required],
      description: ["", Validators.required]
    });

    const position = new RelativePosition({
      placement: OutsidePlacement.BOTTOM_LEFT,
      src: this.el.nativeElement
    });

    this.overlay = this._toppy
      .position(position)
      .content(this.tpl) // template ref
      .create();
    this.fetchAllUsers();
  }
  get f() {
    return this.form.controls;
  }

  fetchAllUsers() {
    this.userService.activeUsers.subscribe(res => {
      this.users = res;
      this.filteredUsers = res;
    });
  }

  inputChange() {
    this.filteredUsers = this.users.filter(u => {
      return (
        (u.firstName + " " + u.lastName)
          .toUpperCase()
          .includes(this.el.nativeElement.value.toUpperCase()) &&
        !this.selectedUsers.some(s => s.userId == u.userId)
      );
    });
  }
  submit() {
    this.message = "";
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    if (!this.selectedUsers.length) {
      this.message = "Please Add Users";
      return;
    }
    let data = {
      groupName: this.form.value.groupName,
      description: this.form.value.description,
      users: this.selectedUsers.map(u => u.userId)
    };
    this.chatService.createGroup(data).subscribe(res => {
    });
  }

  addUser(user) {
    if (!this.selectedUsers.filter(v => v.userId == user.userId).length) {
      this.selectedUsers.push(user);
      this.message = "";
    }
    setTimeout(() => {
      window["$"]('[data-toggle="tooltip"]').tooltip();
    });
  }

  open() {
    this.inputChange();
    this.overlay.open();
  }
  removeUser(user) {
    this.selectedUsers.splice(
      this.selectedUsers.findIndex(function(i) {
        return i.userId === user.userId;
      }),
      1
    );
  }

  close() {
    setTimeout(() => {
      this.overlay.close();
    }, 200);
  }
}
