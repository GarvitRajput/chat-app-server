import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from "javascript-time-ago";

// Load locale-specific relative date/time formatting rules.
import en from "javascript-time-ago/locale/en";
// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en);

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  timeAgo = new TimeAgo("en-US");
  transform(value: any, ...args: unknown[]): unknown {
    return this.timeAgo.format(new Date(value));
  }

}
