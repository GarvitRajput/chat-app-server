import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-edit-profile-model",
  templateUrl: "./edit-profile-model.component.html",
  styleUrls: ["./edit-profile-model.component.scss"]
})
export class EditProfileModelComponent implements OnInit {
  user;
  imageSelected;
  profileForm: FormGroup;
  submitted = false;
  profileImagePath: string;
  button_text: String = "Save";
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userService.userSubject.subscribe(d => {
      this.user = d;
      if (d.profileImagePath && d.profileImagePath.indexOf("https://ui-avatars.com") === -1)
        this.profileImagePath = `${environment.SERVER_URL}${d.profileImagePath}`;
      this.profileForm = this.formBuilder.group({
        firstName: [this.user.firstName, Validators.required],
        lastName: [this.user.lastName, Validators.required],
        mobile: [this.user.mobile],
        website: [this.user.website],
        city: [this.user.city],
        state: [this.user.state],
        country: [this.user.country],
        bio: [this.user.bio],
        profileImagePath: [this.user.profileImagePath],
        facebookProfileUrl: [this.user.facebookProfileUrl],
        linkedInProfileUrl: [this.user.linkedInProfileUrl],
        twitterProfileUrl: [this.user.twitterProfileUrl],
        googlePlusProfileUrl: [this.user.googlePlusProfileUrl],
        instagramProfileUrl: [this.user.instagramProfileUrl],
        dribbleProfileUrl: [this.user.dribbleProfileUrl]
      });
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.profileForm.controls;
  }
  selectImage(file) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      setTimeout(() => {
        this.profileImagePath = e.target.result;
      });
    };
    this.imageSelected = file.target.files[0];
    reader.readAsDataURL(this.imageSelected);
  }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      window["$"]('.nav-tabs a[href="#personal"]').tab("show");
      return;
    }
    this.userService
      .updateUserProfile(this.profileForm.value, this.imageSelected)
      .subscribe(res => {
        if (res) this.button_text = "Saved successfully";
        else this.button_text = "Failed";
        setTimeout(() => {
          this.button_text = "Save";
        }, 3000);
      });
  }
}
