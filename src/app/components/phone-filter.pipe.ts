import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneFilter' })
export class PhoneFilterPipe implements PipeTransform {
  transform(list: any[], query: string): any[] {
    query = query ? query.toLowerCase() : '';
    return query ? list.filter(phone => phone.name.toLowerCase().indexOf(query) !== -1 || phone.snippet.toLowerCase().indexOf(query) !== -1) : list;
  }
}