import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

  constructor ( private domSanitizer: DomSanitizer) {}

  transform(value: string, url: string): any {
    console.log(url + value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  }

}
