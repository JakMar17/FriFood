import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformLink'
})
export class TransformLinkPipe implements PipeTransform {

  transform(link: string, id: string, text: string): any {
    return '<a href="' + link + id + '">' + text + '</a>';
  }

}
