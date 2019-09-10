import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  rightSwipe = false;
  constructor() {}

  ngOnInit() {
    document.addEventListener("swiped-right", e => {
      this.rightSwipe = true;
    });
    document.addEventListener("swiped-left", e => {
      this.rightSwipe = false;
    });
  }

  get isMobile() {
    return window["jQuery"].browser.mobile;
  }
}
