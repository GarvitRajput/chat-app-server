import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.content
        .toLowerCase()
        .includes(searchText);
    });
  }

}
