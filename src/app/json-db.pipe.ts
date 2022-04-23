import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDB',
})
export class JsonDBPipe implements PipeTransform {
  transform(value, ...args: unknown[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
