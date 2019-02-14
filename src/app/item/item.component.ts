import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item;

  ngOnInit(){

  }
}
