import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
