import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;
  waitingResponse=false;
  message: string = "";
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.logOut();
    document.getElementsByTagName("body")[0].classList.add("form-membership");
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  signIn() {
    this.message = "";
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.waitingResponse=true;
    this.authService
      .authenticate(this.loginForm.value)
      .subscribe((res: any) => {
        this.waitingResponse=false;
        if (res) {
          this.router.navigate(["home"]);
        } else {
          this.message = "Invalid Credentials";
        }
      });
  }
  ngOnDestroy() {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("form-membership");
  }
}
