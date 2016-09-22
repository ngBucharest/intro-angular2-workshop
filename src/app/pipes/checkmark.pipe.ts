import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'checkmark' })
export class CheckmarkPipe implements PipeTransform {
  transform(list: boolean): string {
    return list ? '\u2713' : '\u2718';
  }
}
