import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor() {
    window["$"](".loader-container").show();}

  ngOnInit() {
    setTimeout(() => {
      window["$"](".loader-container").hide();
    }, 2000);
  }
}
