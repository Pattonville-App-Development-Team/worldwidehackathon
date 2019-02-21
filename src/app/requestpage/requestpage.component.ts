import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Item} from '../item';

@Component({
  selector: 'app-requestpage',
  templateUrl: './requestpage.component.html',
  styleUrls: ['./requestpage.component.scss']
})
export class RequestpageComponent implements OnInit {

  items: Item[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getRequestedItems()
      .subscribe((res) => {
        console.log(res['data']);
        console.log(res);
        this.items = res['data'];
      }, (err) => {
        console.log(err);
      });
  }

}
