import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidenavfilter',
  pure: false
})
export class SidenavFilterPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    let result = value.filter( item => args.indexOf(item.season) > -1);
    result = value.filter(item => args.indexOf(item.school) > -1);
    result = value.filter(item => args.indexOf(item.size) > -1);
    return result;
  }

}
