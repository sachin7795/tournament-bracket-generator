import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longTextElip'
})
export class LongTextElipPipe implements PipeTransform {

  transform(value: string): string {
    return value.length>10?(value.slice(0,9)+'...'):value;
  }

}
