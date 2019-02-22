import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'sidenavfilter',
  pure: false
})

export class SidenavFilterPipe implements PipeTransform {
  transform(items: Item[], args?: string): Item[] {
    let result = items.filter((item => args.indexOf(item.category) !== -1));
    result = items.filter(item => args.indexOf(item.age) !== -1);
    result = items.filter(item => args.indexOf(item.size) !== -1);
    return result;
  }
}
