import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeImage'
})
export class TakeImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
