import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageNotFound'
})
export class ImageNotFoundPipe implements PipeTransform {

  transform(value: any): string {
    if( value.links === undefined ) {
    	return 'https://static.thenounproject.com/png/3538891-200.png'
    }

    return value.links[0].href;
  }

}
