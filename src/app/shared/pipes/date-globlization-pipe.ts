import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateGloblization'
})
export class DateGloblizationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
