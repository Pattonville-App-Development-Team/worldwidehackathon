import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidenavFilterPipe',
  pure: false
})
export class SidenavFilterPipePipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    let result = value.filter( item => args.indexOf(item.season) > -1);
    result = value.filter(item => args.indexOf(item.school) > -1);
    result = value.filter(item => args.indexOf(item.size) > -1);
    return result;
  }

}
