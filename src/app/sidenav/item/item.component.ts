import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../api.service';
import { Item } from '../../item';
import {ITEMS} from '../../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[];
  requests = 0;
  @Output() messageEvent = new EventEmitter<number>();
  @Input()
  item;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAvailableItems()
      .subscribe((res) => {
        console.log(res['data']);
        console.log(res);
        this.items = res['data'];
      }, (err) => {
        console.log(err);
      });
  }

 onRequest(item: Item) {
    this.requests += 1;
    this.messageEvent.emit(this.requests);
    item.isDisabled = 'true';
    this.api.requestItem(item)
      .subscribe((res) => {
        console.log('success');
        console.log(res['data']);
        this.items = res['data'];
      }, (err) => {
        console.log('failure');
        console.log(err);
      });
    console.log(this.requests);
 }

}
