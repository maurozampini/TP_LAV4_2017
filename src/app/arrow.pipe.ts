import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrow'
})
export class ArrowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 37:
        return 'arrow_back';
        case 38:
        return 'arrow_upward';
        case 39:
        return 'arrow_forward';
        case 40:
        return 'arrow_downward';
      default:
        break;
    }
  }

}
