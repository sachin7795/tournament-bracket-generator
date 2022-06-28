import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date, withYear?: boolean): string {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    value = new Date(value);
    return withYear?
    day[value.getDay()] + ', ' +value.getDate() + ' '+ month[value.getMonth()] + ' ' + value.getFullYear():
    day[value.getDay()] + ', ' +value.getDate() + ' '+ month[value.getMonth()];
  }

}
