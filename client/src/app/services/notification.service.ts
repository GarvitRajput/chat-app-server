import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor() {}

  info(title, message) {
    this.triggerNotification("info", title, message);
  }
  success(title, message) {
    this.triggerNotification("success", title, message);}
  failure(title, message) {
    this.triggerNotification("error", title, message);}

  private triggerNotification(type, title, message) {
    window["$"].ambiance({
      message: message,
      title: title,
      type: type
    });
  }
}
