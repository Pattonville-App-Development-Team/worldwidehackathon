import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  items = ITEMS;

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getItems()
    //   .subscribe(res => {
    //     console.log(res['data']);
    //   }, err => {
    //     console.log(err);
    //   });
    // this.api.getItemByBarcode('00001')
    //   .subscribe(res => {
    //     console.log(res['data']);
    //   }, err => {
    //     console.log(err);
    //   });
    this.api.getItemsByAge(15)
      .subscribe(res => {
        console.log(res['data']);
      }, err => {
        console.log(err);
      });
  }
}
