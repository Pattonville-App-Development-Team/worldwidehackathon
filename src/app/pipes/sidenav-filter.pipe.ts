import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'sidenavfilter',
  pure: false
})
export class SidenavFilterPipe implements PipeTransform {
  transform(array: Array<Item>, args?: string): Array<Item> {
    let result = array;
    // let result = array.filter((item => args.indexOf(item.category) > -1));
    // result = array.filter(item => args.indexOf(item.age) > -1);
    // result = array.filter(item => args.indexOf(item.size) > -1);
    return result;
  }
}
