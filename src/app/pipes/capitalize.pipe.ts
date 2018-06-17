import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, capitalizeAll: boolean = true): any {
    const words = value.split(' ');
    if (!capitalizeAll) {
      return value[0].toUpperCase() + value.slice(1);
    }
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  }

}
