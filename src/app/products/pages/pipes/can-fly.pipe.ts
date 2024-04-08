import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: false,
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'vuela'|'no vuela' {
    return value ? 'vuela' : 'no vuela';
  }

}
