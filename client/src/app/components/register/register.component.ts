import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  submitted = false;
  message: string = "";
  waitingResponse=false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    document.getElementsByTagName("body")[0].classList.add("form-membership");
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  register() {
    this.message = "";
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.waitingResponse=true;
    this.authService.register(this.registerForm.value)
      .subscribe((res: any) => {
        this.waitingResponse=false;
        if (res) {
          this.router.navigate(["home"]);
        } else {
          this.message = "User Already Exists";
        }
      });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  ngOnDestroy() {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("form-membership");
  }
}
