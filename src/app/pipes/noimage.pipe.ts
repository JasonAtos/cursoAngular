import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    const noimg = 'assets/img/noimage.png';
    if(!images)
      return noimg;
    
    if (images.length > 0)
      return images[0].url
    else
      return noimg;
  }

}
