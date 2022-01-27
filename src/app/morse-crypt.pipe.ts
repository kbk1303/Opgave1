import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morseCrypt'
})
export class MorseCryptPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
