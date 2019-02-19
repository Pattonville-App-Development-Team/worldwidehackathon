import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../api.service';
import { Item } from '../../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items;
  requests = 0;
  message = 'Hola Mundo!';
  @Output() messageEvent = new EventEmitter<number>();
  @Input()
  item;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.items = this.api.getItems()
      .subscribe((res) => {
        console.log(res['data']);
        console.log(res);
        this.items = res['data'];
      }, (err) => {
        console.log(err);
      });
  }

 onRequest(item) {
    this.requests += 1;
    this.messageEvent.emit(this.requests);
    item.isDisabled = true;
    console.log(this.requests);
 }

}