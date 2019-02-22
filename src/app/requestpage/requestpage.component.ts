import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Item} from '../item';
import {RequestdialogComponent} from '../requestdialog/requestdialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-requestpage',
  templateUrl: './requestpage.component.html',
  styleUrls: ['./requestpage.component.scss']
})
export class RequestpageComponent implements OnInit {

  items: Item[];

  constructor(private api: ApiService, public  dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestdialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

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

  onUnrequest(item: Item) {
    item.isDisabled = 'false';
    this.api.unrequestItem(item)
      .subscribe((res) => {
        console.log('success');
        this.api.getRequestedItems()
          .subscribe(requestedItems => {
            this.items = requestedItems['data'];
          }, err => {
            console.log(err);
          });
      }, (err) => {
        console.log('failure');
        console.log(err);
      });
  }

}
