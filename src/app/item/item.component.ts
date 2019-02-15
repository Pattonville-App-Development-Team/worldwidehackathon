import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items = ITEMS;
  breakpoint: number;

  @Input()
  item;

  ngOnInit(){
    if(window.innerWidth == 320 || window.innerWidth == 375 || window.innerWidth == 414 || window.innerWidth == 438){
      this.breakpoint = 1;
    } else if(window.innerWidth == 568 || window.innerWidth == 667 || window.innerWidth == 736 || window.innerWidth == 768 || window.innerWidth == 800 || window.innerWidth == 1024){
      this.breakpoint = 2;
    } else {
      this.breakpoint = 4;
    }
  }

  onResize(event) {
    if(window.innerWidth == 320 || window.innerWidth == 375 || window.innerWidth == 414 || window.innerWidth == 438){
      this.breakpoint = 1;
    } else if(window.innerWidth == 568 || window.innerWidth == 667 || window.innerWidth == 736 || window.innerWidth == 768 || window.innerWidth == 1024 || window.innerWidth == 800){
      this.breakpoint = 2;
    } else {
      this.breakpoint = 4;
    }
 }

}
