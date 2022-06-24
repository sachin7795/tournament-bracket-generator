import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date, withYear?: boolean): string {
    let arr = (value+'').split(' ');
    return withYear?
    arr[0] + ', ' +arr[2] + ' '+ arr[1] + ' ' + arr[3]:
    arr[0] + ', ' +arr[2] + ' '+ arr[1];
  }

}
